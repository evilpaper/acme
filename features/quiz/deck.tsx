import { Card } from "./card";
import { CardData } from "./data/types";

export function Deck({ deck }: { deck: CardData[] }) {
  return (
    <div className="perspective grid place-items-center w-[min(100%,320px)] aspect-[5/7]">
      {deck.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
