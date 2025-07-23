import Link from "next/link";
import { Deck } from "./data/types";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

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
      <div className="mx-auto grid justify-center gap-4 md:grid-cols-2 xl:grid-cols-3">
        {decks &&
          decks.map(({ suite, name, description, slug }) => {
            return (
              <article
                key={slug}
                className="flex flex-col justify-between gap-6 relative overflow-hidden rounded-2xl border-2 bg-background p-8 aspect-[6/8]"
              >
                <p className="text-base">{suite}</p>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl md:text-3xl font-bold leading-10 md:leading-tight tracking-tighter">
                    {name}
                  </h1>
                  <div className="flex flex-col justify-between gap-8">
                    <h3 className="text-base">{description}</h3>
                    <Button asChild className="w-full">
                      <Link
                        href={`/cards/${slug}`}
                        className="flex h-11 w-fit gap-2 rounded-md px-8"
                      >
                        <span>Start</span>
                        <Icons.arrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
