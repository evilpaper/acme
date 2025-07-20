import { useEffect, useState } from "react";
import { CardBack } from "./card-back";
import { CardFront } from "./card-front";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { PreparedCard } from "./deck";

interface Props {
  card: PreparedCard;
  handleSwipe: (id: number) => void;
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
const SWIPE_THRESHOLD = 110;

export function Card({
  card,
  handleSwipe,
  isOnTop,
  index,
  deckLength,
  deckName,
}: Props) {
  const { id, prompt, answer, rotation } = card;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useTransform(x, [-150, -100, 100, 150], [0, 1, 1, 0]);
  const rotateRaw = useTransform(x, [-100, 100], [-10, 10]);

  // 1. Deck rotation (animates to 0 when on top)
  const deckRotation = useMotionValue(isOnTop ? 0 : rotation);

  // Animate to 0 when this card becomes the top card
  useEffect(() => {
    if (isOnTop) {
      // Animate to 0 with a spring
      animate(deckRotation, 0, { type: "spring", stiffness: 400, damping: 20 });
    } else {
      // Instantly set to its random rotation when not on top
      deckRotation.set(rotation);
    }
  }, [isOnTop, rotateRaw, rotation]);

  // 2. Combine deck rotation and drag rotation
  const rotate = useTransform([deckRotation, rotateRaw], (values) => {
    const [deck, drag] = values as [number, number];
    return `${isOnTop ? deck + drag : deck}deg`;
  });

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
      handleSwipe(id);
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
        rotate,
        transformPerspective: 1000,
      }}
      animate={{
        rotateY: isFlipped ? 180 : 0,
        rotate: isOnTop ? 0 : rotation,
        zIndex: deckLength - index,
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
      <motion.div
        className="w-full h-full flex flex-col absolute backface-hidden"
        style={{
          opacity,
        }}
      >
        <CardFront
          id={id}
          front={prompt}
          deckName={deckName}
          deckLength={deckLength}
        />
      </motion.div>
      <motion.div
        className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180"
        style={{
          opacity,
        }}
      >
        <CardBack
          id={id}
          back={answer}
          deckName={deckName}
          deckLength={deckLength}
        />
      </motion.div>
    </motion.div>
  );
}
