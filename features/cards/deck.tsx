"use client";

import { useState } from "react";
import { Card } from "./card";
import type { Card as CardType } from "./data/types";

export interface PreparedCard extends CardType {
  rotation: number;
}

interface Props {
  preparedCards: PreparedCard[];
  name: string;
}

export function Deck({ preparedCards, name }: Props) {
  const [deck, setDeck] = useState(preparedCards);

  function moveToBack(id: number) {
    setDeck((pv) => pv.filter((v) => v.id !== id));
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
            deckName={name}
          />
        );
      })}
    </div>
  );
}
