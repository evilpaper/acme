import { useState } from "react";
import { CardBack } from "./card-back";
import { CardFront } from "./card-front";
import { motion, useMotionValue } from "motion/react";

interface Props {
  id: string;
  rotation: number;
  handleSwipe: () => void;
  isOnTop: boolean;
}

export function Card({ id, rotation, handleSwipe, isOnTop }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  function handleDragEnd() {
    if (Math.abs(x.get()) > 150) {
      handleSwipe();
    }
  }

  return (
    <motion.div
      className="w-full h-full preserve-3d hover:cursor-grab active:cursor-grabbing origin-bottom touch-action: pan-y"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        rotate: isOnTop ? 0 : rotation,
        transformPerspective: 1000,
      }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 32,
      }}
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 32 }}
      onClick={handleClick}
      onDragEnd={handleDragEnd}
    >
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden">
        <CardFront id={id} />
      </motion.div>
      <motion.div className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180">
        <CardBack id={id} />
      </motion.div>
    </motion.div>
  );
}
