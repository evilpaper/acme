import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { FlashCard } from "./flashcard";
import { Deck } from "./deck";

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

interface BoardProps {
  cards: Card[];
  questions: Question[];
  name: string;
}

export function Board({ cards, name, questions }: BoardProps) {
  const [stack, setStack] = useState(cards);

  const handleNext = () => {
    const isOnTop = stack[stack.length - 1];
    const nextStack = stack.filter((card) => card.id !== isOnTop.id);
    setStack(nextStack);
  };

  return (
    <>
      <div className="text-sm text-muted-foreground">
        {name} | Question {questions.length - stack.length + 1} of{" "}
        {questions.length}
      </div>
      <Progress
        value={((questions.length - stack.length) / questions.length) * 100}
      />
      <Deck deck={stack} />
      <Button onClick={handleNext} className="w-full">
        Next
      </Button>
    </>
  );
}
