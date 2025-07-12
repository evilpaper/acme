import { useState } from "react";
import { Card } from "./card";

export interface PreparedCard {
  id: number;
  term: string;
  definition: string;
  rotation: number;
}

interface Props {
  preparedCards: PreparedCard[];
}

export function Deck({ preparedCards }: Props) {
  const [deck, setDeck] = useState(preparedCards);

  function moveToBack() {
    if (deck.length > 1) {
      const topCard = deck[0];
      const rest = deck.slice(1, deck.length);
      setDeck([...rest, topCard]);
    }
  }

  function isCardOnTop(card: { id: number }) {
    if (!deck.length) return false;
    return deck[0].id === card.id;
  }

  return (
    <div className="perspective grid place-items-center w-[min(100%,280px)] aspect-[5/7] mb-6">
      {deck.map((card, index) => {
        return (
          <Card
            card={card}
            key={card.id}
            handleSwipe={moveToBack}
            isOnTop={isCardOnTop(card)}
            index={index}
            deckLength={deck.length}
          />
        );
      })}
    </div>
  );
}
