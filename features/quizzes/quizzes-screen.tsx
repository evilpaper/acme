import Link from "next/link";
import { Quiz } from "./data/types";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function QuizzesScreen({ quizzes }: { quizzes: Quiz[] }) {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Quizzes
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Practice questions. Track progress.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {quizzes &&
          quizzes.map(({ name, description, slug }) => {
            return (
              <article
                key={slug}
                className="flex flex-col items-center justify-between gap-6 relative overflow-hidden rounded-2xl border-2 bg-background p-8 aspect-[6/8]"
              >
                <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                  {name}
                </h1>
                <div className="flex flex-col items-center justify-between gap-8">
                  <h3 className="text-center text-xl">{description}</h3>
                  <Button asChild>
                    <Link
                      href={`/quizzes/${slug}`}
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
