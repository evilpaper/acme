import { useState } from "react";
import { CardBack } from "./card-back";
import { CardFront } from "./card-front";
import { motion, useMotionValue, useTransform } from "motion/react";

interface Props {
  id: string;
  rotation: number;
}

export function Card({ card }: { card: Props }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, -100, 100, 150], [0, 1, 1, 0]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  /**
   * Why this structure. Appling opacity to top motion div lead to funky behaviour.
   * Seemed like the transform wasn't applied to the back of the card when flipped.
   * It just vanished after the breakpoint (100px) and the backface of the front became visible.
   * Best guess is that it has to do with how the browser flattens or isolate transformed elements.
   * Or some othe dark art.
   * Making front and back motion.div's and applying opacity to each of them solved the issues.
   * But the stucture got a lot less clean.
   */

  return (
    <motion.div
      className="w-full h-full preserve-3d hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        rotate: card.rotation,
        transformPerspective: 1000,
      }}
      animate={{ rotateY: isFlipped ? 180 : 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 32,
      }}
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onClick={handleClick}
    >
      <motion.div
        style={{
          opacity,
        }}
        className="w-full h-full flex flex-col absolute backface-hidden"
      >
        <CardFront />
      </motion.div>
      <motion.div
        style={{
          opacity,
        }}
        className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180"
      >
        <CardBack />
      </motion.div>
    </motion.div>
  );
}
