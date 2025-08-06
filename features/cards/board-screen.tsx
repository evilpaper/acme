import { Board } from "./board";
import { decks } from "./data/data";

export function BoardScreen({ slug }: { slug: string }) {
  const deck = decks.find((deck) => deck.slug === slug);

  if (!deck) {
    return null;
  }

  // Pick 20 random cards
  const randomCards = deck.cards.sort(() => Math.random() - 0.5).slice(0, 20);

  return <Board cards={randomCards} name={deck.name} />;
}
