import { useState } from "react";
import { Card } from "./card";
import type { Card as CardType } from "./data/types";

interface Props {
  cards: CardType[];
  name: string;
  onCardSwipe: () => void;
  onButtonScaleChange: (scales: { left: number; right: number }) => void;
}

const VISIBLE_CARDS = 4;

export function Deck({ cards, name, onCardSwipe, onButtonScaleChange }: Props) {
  const [deck, setDeck] = useState(cards);

  function moveToBack(id: number) {
    setDeck((pv) => pv.filter((v) => v.id !== id));
    onCardSwipe();
    // Reset button scales when a card is moved to the back
    // TODO: This is a hack to reset the button scales when a card is moved to the back. Changes this later.
    onButtonScaleChange({ left: 1, right: 1 });
  }

  function isCardOnTop(card: { id: number }) {
    if (!deck.length) return false;
    return deck[0].id === card.id;
  }

  // Only render the top 4 cards for performance reasons
  const cardsToRender = deck.slice(0, VISIBLE_CARDS);

  return (
    <div className="grid place-items-center w-[min(100%,280px)] aspect-[5/7] mb-6 relative">
      <div className="absolute">
        <p>The end</p>
      </div>
      {cardsToRender.map((card, index) => {
        return (
          <Card
            card={card}
            key={card.id}
            handleSwipe={moveToBack}
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
}
