import { Card } from "./card";

interface Props {
  deck: { id: string; rotation: number }[];
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
