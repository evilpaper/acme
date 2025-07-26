import { Board } from "./board";
import { decks } from "./data/data";

export function PlayScreen({ slug }: { slug: string }) {
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
    <Board preparedCards={preparedCards} name={deck.name} suite={deck.suite} />
  );
}
