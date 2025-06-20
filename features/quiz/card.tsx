import { useState } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { CardBack } from "./card-back";
import { CardData } from "./data/types";
import { CardFront } from "./card-front";

interface Props {
  card: CardData;
}

export function Card({ card }: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="w-full h-full preserve-3d"
      style={{
        gridRow: 1,
        gridColumn: 1,
        transform: `rotate(${card.rotation}deg)`,
      }}
    >
      <motion.div
        className="w-full h-full preserve-3d hover:cursor-grab active:cursor-grabbing"
        style={{ x, opacity }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
      >
        <CardFront
          question={card}
          handleAnswer={(answer) => {
            setIsFlipped(true);
            setSelectedAnswer(answer);
            handleClick();
          }}
        />
        <CardBack
          selectedAnswer={selectedAnswer}
          correctanswer={card.correctanswer}
          explanation={card.explanation}
          source={card.source}
        />
      </motion.div>
    </div>
  );
}
