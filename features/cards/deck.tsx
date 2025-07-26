"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Card } from "./card";
import type { Card as CardType } from "./data/types";

export interface PreparedCard extends CardType {
  rotation: number;
}

interface Props {
  preparedCards: PreparedCard[];
  name: string;
  suite: string;
  setCardDrivenProps: Dispatch<
    SetStateAction<{
      buttonScaleBadAnswer: number;
      buttonScaleGoodAnswer: number;
    }>
  >;
}

export function Deck({
  preparedCards,
  name,
  suite,
  setCardDrivenProps,
}: Props) {
  const [deck, setDeck] = useState(preparedCards);

  function moveToBack(id: number) {
    setDeck((pv) => pv.filter((v) => v.id !== id));
    setCardDrivenProps((state) => ({
      ...state,
      buttonScaleBadAnswer: 1,
      buttonScaleGoodAnswer: 1,
    }));
  }

  function isCardOnTop(card: { id: number }) {
    if (!deck.length) return false;
    return deck[0].id === card.id;
  }

  return (
    <div className="grid place-items-center w-[min(100%,280px)] aspect-[5/7] mb-6 relative">
      <div className="absolute">
        <p>The end</p>
      </div>
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
            deckSuite={suite}
            setCardDrivenProps={setCardDrivenProps}
          />
        );
      })}
    </div>
  );
}
