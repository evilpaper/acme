"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CardFront } from "./card-front";
import { QuestionWithOptions } from "./data/types";
import { CardBack } from "./card-back";
import { motion } from "motion/react";
import { questions } from "@/app/lib/placeholder-data";
import { Board } from "./board";
import { FlashCard } from "./flashcard";

type Question = {
  question: string;
  id: string;
  options: string[];
  correctanswer: string;
  explanation: string;
  source?: string;
};

export type Card = Question & {
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
      <Board cards={cards} name={name} questions={questions} />
    </div>
  );
}

interface CardStackProps {
  cards: Card[];
  questions: Question[];
  name: string;
}
