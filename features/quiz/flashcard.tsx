import { useState } from "react";
import { Card } from "./card-quiz";
import { motion } from "motion/react";
import { CardFront } from "./card-front";
import { CardBack } from "./card-back";

interface CardProps {
  card: Card;
}

export function FlashCard({ card }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

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
        className="w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.4,
          type: "spring",
          stiffness: 300,
          damping: 20,
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
