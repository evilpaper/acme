import { useState, forwardRef } from "react";
import { Card, CardRef } from "./card";
import type { Card as CardType } from "./data/types";

interface Props {
  cards: CardType[];
  name: string;
  onCardSwipe: () => void;
  onButtonScaleChange: (scales: { left: number; right: number }) => void;
}

const VISIBLE_CARDS = 5;

export const Deck = forwardRef<CardRef, Props>(
  ({ cards, name, onCardSwipe, onButtonScaleChange }, ref) => {
    const [deck, setDeck] = useState(cards);

    function removeCard(id: string) {
      setDeck((pv) => pv.filter((v) => v.id !== id));
      onCardSwipe();
      onButtonScaleChange({ left: 1, right: 1 });
    }

    function isCardOnTop(card: { id: string }) {
      if (!deck.length) return false;
      return deck[0].id === card.id;
    }

    // Only render the top VISIBLE_CARDS cards for performance reasons
    const cardsToRender = deck.slice(0, VISIBLE_CARDS);

    return (
      <div className="grid place-items-center w-[min(100%,280px)] aspect-[5/7] mb-6 relative">
        <div className="absolute">
          <p>The end</p>
        </div>
        {cardsToRender.map((card, index) => {
          return (
            <Card
              ref={isCardOnTop(card) ? ref : null}
              card={card}
              key={card.prompt}
              handleSwipe={removeCard}
              isOnTop={isCardOnTop(card)}
              index={index}
              deckLength={deck.length}
              deckName={name}
              onButtonScaleChange={onButtonScaleChange}
            />
          );
        })}
      </div>
    );
  },
);
