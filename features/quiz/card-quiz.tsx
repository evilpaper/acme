"use client";

import { Board } from "./board";
import { QuestionWithOptions } from "./data/types";

interface CardQuizProps {
  name: string;
  questions: QuestionWithOptions[];
}

export function CardQuiz({ name, questions }: CardQuizProps) {
  const cards = questions.map((question, index) => {
    return { ...question, rotation: index % 2 === 0 ? 5 : -7 };
  });

  return (
    <div className="w-[min(100%,448px)] mx-auto flex flex-col items-center justify-center gap-6">
      <Board name={name} totalCount={cards.length} cards={cards} />
    </div>
  );
}
