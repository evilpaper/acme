"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CardFront } from "./card-front";
import { QuestionWithOptions } from "./data/types";
import { CardBack } from "./card-back";
import { motion } from "motion/react";

type Question = {
  question: string;
  id: string;
  options: string[];
  correctanswer: string;
  explanation: string;
  source?: string;
};

type Card = Question & {
  rotation: number;
};

type Quiz = {
  name: string;
  questions: Question[];
};

export function CardQuiz({ quiz }: { quiz: Quiz }) {
  const [score, setScore] = useState(0);

  const { name, questions } = quiz;

  const cards = questions.map((question, index) => {
    return { ...question, rotation: index % 2 === 0 ? 5 : -7 };
  });

  const resetQuiz = () => {
    setScore(0);
  };

  return (
    <div className="w-[min(100%,448px)] mx-auto flex flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">
        {name} | Question ? of {questions.length}
      </div>
      {/* <Progress value={((currentQuestion + 1) / questions.length) * 100} /> */}
      <CardStack cards={cards} />
    </div>
  );
}

interface CardStackProps {
  cards: Card[];
}

function CardStack({ cards }: CardStackProps) {
  const [stack, setStack] = useState(cards);

  const handleNext = () => {
    const isOnTop = stack[stack.length - 1];
    const nextStack = stack.filter((card) => card.id !== isOnTop.id);
    setStack(nextStack);
  };

  return (
    <>
      <div className="perspective grid place-items-center w-[min(100%,320px)] aspect-[5/7]">
        {stack.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </div>
      <Button onClick={handleNext} className="w-full">
        Next
      </Button>
    </>
  );
}

interface CardProps {
  card: Card;
}

function Card({ card }: CardProps) {
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
