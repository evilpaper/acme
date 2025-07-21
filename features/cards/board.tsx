import { Deck } from "./deck";
import { decks } from "@/features/cards/data/data";

export function Board({ slug }: { slug: string }) {
  const deck = decks.find((deck) => deck.slug === slug);

  if (!deck) {
    return null;
  }

  const cards = deck.cards;

  const preparedCards = cards.map((card) => {
    return {
      ...card,
      rotation: card.id % 2 ? 6 : -8,
    };
  });

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck preparedCards={preparedCards} name={deck.name} suite={deck.suite} />
    </section>
  );
}
