import { Card } from "./card-quiz";
import { FlashCard } from "./flashcard";

interface FlashCardDeckProps {
  deck: Card[];
}

export function Deck({ deck }: FlashCardDeckProps) {
  return (
    <div className="perspective grid place-items-center w-[min(100%,320px)] aspect-[5/7]">
      {deck.map((card) => {
        return <FlashCard card={card} key={card.id} />;
      })}
    </div>
  );
}
