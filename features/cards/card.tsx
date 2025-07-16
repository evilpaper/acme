import { useState } from "react";
import { CardBack } from "./card-back";
import { CardFront } from "./card-front";
import { motion, useMotionValue } from "motion/react";
import { PreparedCard } from "./deck";

interface Props {
  card: PreparedCard;
  handleSwipe: () => void;
  isOnTop: boolean;
  index: number;
  deckLength: number;
  deckName: string;
}

/**
 * Distance threshold in pixels for card swipe detection.
 *
 * When a card is dragged horizontally or vertically:
 * - If dragged distance ≤ this threshold: card stays in place and can be flipped
 * - If dragged distance > this threshold: card is swiped to the back of the deck
 */
const SWIPE_THRESHOLD = 60;

export function Card({
  card,
  handleSwipe,
  isOnTop,
  index,
  deckLength,
  deckName,
}: Props) {
  const { id, front, back, rotation } = card;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // const rotateRaw = useTransform(x, [-100, 100], [-10, 10]);

  // const rotate = useTransform(() => {
  //   const offset = rotation;
  //   return `${rotateRaw.get() + offset}deg`;
  // });

  function handleClick() {
    const isWithinThreshold = isDragWithinThreshold();
    if (isWithinThreshold && !isDragging) {
      setIsFlipped(!isFlipped);
    }
    setIsDragging(false);
  }

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd() {
    const shouldSwipe = isDragBeyondThreshold();
    if (shouldSwipe) {
      handleSwipe();
      resetFlipState();
    }
    setIsDragging(false);
  }

  const isDragWithinThreshold = () => {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    return xDistance <= SWIPE_THRESHOLD && yDistance <= SWIPE_THRESHOLD;
  };

  const isDragBeyondThreshold = () => {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    return xDistance > SWIPE_THRESHOLD || yDistance > SWIPE_THRESHOLD;
  };

  const resetFlipState = () => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  };

  return (
    <motion.div
      className="w-full h-full preserve-3d hover:cursor-grab active:cursor-grabbing origin-bottom touch-action: pan-y"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        y,
        rotate: isOnTop ? 0 : rotation,
        transformPerspective: 1000,
      }}
      animate={{
        rotateY: isFlipped ? 180 : 0,
        zIndex: deckLength - index,
        rotate: isOnTop ? 0 : rotation,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 32,
      }}
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragElastic={0.8}
      dragTransition={{
        bounceStiffness: 400,
        bounceDamping: 54,
      }}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden ">
        <CardFront
          id={id}
          front={front}
          deckName={deckName}
          deckLength={deckLength}
        />
      </motion.div>
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180">
        <CardBack
          id={id}
          back={back}
          deckName={deckName}
          deckLength={deckLength}
        />
      </motion.div>
    </motion.div>
  );
}
