"use client";

import { Board } from "./board";
import { QuestionWithOptions } from "./data/types";

interface Props {
  name: string;
  questions: QuestionWithOptions[];
}

export function Quiz({ name, questions }: Props) {
  const cards = questions.map((question, index) => {
    return { ...question, rotation: index % 2 === 0 ? 5 : -7 };
  });

  return <Board name={name} initialCount={cards.length} cards={cards} />;
}
