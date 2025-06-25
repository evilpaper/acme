import { Card } from "./card";
import { CardData } from "./data/types";

interface Props {
  deck: CardData[];
}

export function Deck({ deck }: Props) {
  return (
    <div className="perspective grid place-items-center w-[min(100%,300px)] aspect-[5/7]">
      {deck.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </div>
  );
}
