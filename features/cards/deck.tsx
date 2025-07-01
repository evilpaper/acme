import { Card } from "./card";

interface Props {
  deck: { id: string; rotation: number }[];
  handleSwipe: () => void;
}

export function Deck({ deck, handleSwipe }: Props) {
  function isCardOnTop(card: { id: string; rotation: number }) {
    if (!deck.length) return false;
    return deck[deck.length - 1].id === card.id;
  }

  return (
    <div className="perspective grid place-items-center w-[min(100%,280px)] aspect-[5/7] mb-6">
      {deck.map((card) => {
        return (
          <Card
            id={card.id}
            rotation={card.rotation}
            key={card.id}
            handleSwipe={handleSwipe}
            isOnTop={isCardOnTop(card)}
          />
        );
      })}
    </div>
  );
}
