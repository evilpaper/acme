import Link from "next/link";
import { Deck } from "./data/types";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export function CardsScreen({ decks }: { decks: Deck[] }) {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Cards
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Ridiculously effective flashcards. Flip, swipe, eat, repeat.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {decks &&
          decks.map(({ name, description, slug }) => {
            return (
              <article
                key={slug}
                className="flex flex-col justify-between gap-6 relative overflow-hidden rounded-2xl border-2 bg-background p-8 min-h-[360px] aspect-[5/7]"
              >
                <header className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold leading-tight tracking-tight text-primary/90">
                    {name}
                  </h1>
                  <p className="text-base text-muted-foreground">
                    {description}
                  </p>
                </header>
                <section className="flex flex-col justify-between gap-4">
                  <Button asChild className="w-full" variant="ghost">
                    <Link
                      href={`/cards/${slug}`}
                      className="flex h-11 w-fit gap-2 rounded-md px-8"
                    >
                      <span className="font-medium">Study</span>
                      <Icons.arrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </section>
              </article>
            );
          })}
      </div>
    </section>
  );
}
