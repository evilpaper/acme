import Link from "next/link";
import { Button } from "@/components/ui/button";
import { decks } from "@/features/cards/data/data";
import { Icons } from "@/components/ui/icons";

export async function LandingScreen() {
  return (
    <section className="mt-1 md:mt-10 flex flex-col pb-8 pt-8">
      <div className="align-center flex flex-col items-center">
        <h1 className="mb-4 max-w-screen-md p-2 text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Practice makes perfect. <br /> Or actually permanent... but you get
          it.
        </h1>
        <p className="mb-8 max-w-screen-sm text-center text-xl md:text-2xl">
          Cards for spaced repetition
        </p>
        <div className="mb-8 md:max-w-[64rem]">
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {decks &&
              decks.map(({ name, description, slug }) => {
                return (
                  <article
                    key={slug}
                    className="flex flex-col justify-between gap-6 relative overflow-hidden rounded-2xl border-2 bg-background p-8 min-h-[360px]"
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
        </div>
      </div>
    </section>
  );
}
