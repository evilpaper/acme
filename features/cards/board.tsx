import { Deck } from "./deck";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Cards = [
  {
    id: "1",
    rotation: 5,
  },
  {
    id: "2",
    rotation: -7,
  },
  {
    id: "3",
    rotation: 5,
  },
  {
    id: "4",
    rotation: -7,
  },
  {
    id: "5",
    rotation: 5,
  },
  {
    id: "6",
    rotation: -7,
  },
];

export function Board() {
  const [deck, setDeck] = useState(Cards);

  const handleNext = () => {
    const isOnTop = deck[deck.length - 1];
    const nextStack = deck.filter((card) => card.id !== isOnTop.id);
    setDeck(nextStack);
  };

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck deck={deck} />
      <Button onClick={handleNext} className="w-full">
        Next
      </Button>
    </section>
  );
}
