import { Deck } from "./deck";
import { useState } from "react";
import { CardData } from "./data/types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface Props {
  cards: CardData[];
  initialCount: number;
  name: string;
}

export function Board({ name, initialCount, cards }: Props) {
  const [deck, setDeck] = useState(cards);

  const handleNext = () => {
    const isOnTop = deck[deck.length - 1];
    const nextStack = deck.filter((card) => card.id !== isOnTop.id);
    setDeck(nextStack);
  };

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4">
        <p className="text-sm text-muted-foreground">
          {name} | Question{" "}
          {Math.min(initialCount, initialCount - deck.length + 1)} of{" "}
          {initialCount}
        </p>
        <Progress value={((initialCount - deck.length) / initialCount) * 100} />
      </header>
      <Deck deck={deck} />
      <Button onClick={handleNext} className="w-full">
        Next
      </Button>
    </section>
  );
}
