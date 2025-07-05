import { useState } from "react";
import { CardBack } from "./card-back";
import { CardFront } from "./card-front";
import { motion, useMotionValue } from "motion/react";

interface Props {
  id: string;
  rotation: number;
  handleSwipe: () => void;
  isOnTop: boolean;
  index: number;
  deckLength: number;
}

/**
 * Distance threshold in pixels for card swipe detection.
 *
 * When a card is dragged horizontally or vertically:
 * - If dragged distance ≤ this threshold: card stays in place and can be flipped
 * - If dragged distance > this threshold: card is swiped to the back of the deck
 */
const SWIPE_THRESHOLD = 50;

export function Card({
  id,
  rotation,
  handleSwipe,
  isOnTop,
  index,
  deckLength,
}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleClick = () => {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    if (xDistance <= SWIPE_THRESHOLD && yDistance <= SWIPE_THRESHOLD) {
      setIsFlipped(!isFlipped);
    }
  };

  function handleDragEnd() {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    if (xDistance > SWIPE_THRESHOLD || yDistance > SWIPE_THRESHOLD) {
      handleSwipe();
      if (isFlipped) {
        setIsFlipped((prev) => !prev);
      }
    }
  }

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
      dragTransition={{ bounceStiffness: 500, bounceDamping: 46 }}
      onClick={handleClick}
      onDragEnd={handleDragEnd}
    >
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden ">
        <CardFront id={id} />
      </motion.div>
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180">
        <CardBack id={id} />
      </motion.div>
    </motion.div>
  );
}
