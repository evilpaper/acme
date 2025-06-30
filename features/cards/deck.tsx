import { Card } from "./card";

interface Props {
  deck: { id: string; rotation: number }[];
  handleSwipe: () => void;
}

export function Deck({ deck, handleSwipe }: Props) {
  return (
    <div className="perspective grid place-items-center w-[min(100%,300px)] aspect-[5/7]">
      {deck.map((card) => {
        return (
          <Card
            id={card.id}
            rotation={card.rotation}
            key={card.id}
            handleSwipe={handleSwipe}
          />
        );
      })}
    </div>
  );
}
