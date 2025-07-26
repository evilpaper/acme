import { Button } from "@/components/ui/button";
import { Deck } from "./deck";
import { decks } from "@/features/cards/data/data";
import { Icons } from "@/components/ui/icons";
import type { Card as CardType } from "./data/types";

export interface PreparedCard extends CardType {
  rotation: number;
}

interface Props {
  preparedCards: PreparedCard[];
  name: string;
  suite: string;
}

export function Board({ preparedCards, name, suite }: Props) {
  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck preparedCards={preparedCards} name={name} suite={suite} />
      <div
        id="actions"
        className="flex items-center justify-center w-full  gap-4 relative z-10"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary border-2"
        >
          <Icons.close />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary border-2"
        >
          <Icons.check />
        </Button>
      </div>
    </section>
  );
}
