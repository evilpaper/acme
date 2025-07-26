import { Button } from "@/components/ui/button";
import { Deck } from "./deck";
import { decks } from "@/features/cards/data/data";
import { Icons } from "@/components/ui/icons";

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
      <div
        id="actions"
        className="flex items-center justify-center w-full  gap-4 relative z-10"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary border-2 p-2"
        >
          <Icons.check />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary border-2 p-2"
        >
          <Icons.add />
        </Button>
      </div>
    </section>
  );
}
