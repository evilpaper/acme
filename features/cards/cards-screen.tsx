import Link from "next/link";
import { Deck } from "./data/types";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function CardsScreen({ cards }: { cards: Deck[] }) {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Cards
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Flip, swipe and shuffle.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards &&
          cards.map(({ name, description, slug }) => {
            return (
              <article
                key={slug}
                className="flex flex-col items-center justify-between gap-6 relative overflow-hidden rounded-lg border bg-background p-8 aspect-[6/8]"
              >
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                  {name}
                </h1>
                <div className="flex flex-col items-center justify-between gap-8">
                  <h3 className="text-center text-xl">{description}</h3>
                  <Button asChild>
                    <Link
                      href={`/cards/${slug}`}
                      className="flex h-11 w-fit gap-2 rounded-md px-8"
                    >
                      <span>Start</span>
                      <Icons.arrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
}
