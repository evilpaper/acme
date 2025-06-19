import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { Deck } from "./deck";
import { CardData } from "./data/types";

interface BoardProps {
  cards: CardData[];
  totalCount: number;
  name: string;
}

export function Board({ name, totalCount, cards }: BoardProps) {
  const [deck, setDeck] = useState(cards);

  const handleNext = () => {
    const isOnTop = deck[deck.length - 1];
    const nextStack = deck.filter((card) => card.id !== isOnTop.id);
    setDeck(nextStack);
  };

  return (
    <>
      <div className="text-sm text-muted-foreground">
        {name} | Question {totalCount - deck.length + 1} of {totalCount}
      </div>
      <Progress value={((totalCount - deck.length) / totalCount) * 100} />
      <Deck deck={deck} />
      <Button onClick={handleNext} className="w-full">
        Next
      </Button>
    </>
  );
}
