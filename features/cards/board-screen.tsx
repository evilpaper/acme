import { Board } from "./board";
import { decks } from "./data/data";

export function BoardScreen({ slug }: { slug: string }) {
  const deck = decks.find((deck) => deck.slug === slug);

  if (!deck) {
    return null;
  }

  return <Board cards={deck.cards} name={deck.name} suite={deck.suite} />;
}
