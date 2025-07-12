import { Card } from "./card";

export interface Card {
  id: number;
  term: string;
  definition: string;
}

interface Props {
  deck: Card[];
  handleSwipe: () => void;
}

export function Deck({ deck, handleSwipe }: Props) {
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
            handleSwipe={handleSwipe}
            isOnTop={isCardOnTop(card)}
            index={index}
            deckLength={deck.length}
          />
        );
      })}
    </div>
  );
}
