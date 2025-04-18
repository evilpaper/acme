import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

const quizzes = [
  {
    name: "JavaScript 101",
    description:
      "A bunch of JavaScript questions taken from MDN and JavaScript Info.",
    slug: "javascript-101",
  },
  {
    name: "Lydia Hallies JavaScript Questions",
    description:
      "40 JavaScript questions sourced from Lydia Hallies GitHub repository.",
    slug: "lydia-hallies-javascript-questions",
  },
];

export function QuizScreen() {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Straight to the point quizzes
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Ready made quizzes from leading resources online. Totally free of use.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {quizzes.map(({ name, description, slug }) => {
          return (
            <article className="flex flex-col items-center justify-between gap-6 relative overflow-hidden rounded-lg border bg-background p-8">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
                {name}
              </h1>
              <h3 className="text-center text-xl">{description}</h3>
              <Button asChild>
                <Link
                  href={`/quiz/${slug}`}
                  className="flex h-11 w-fit gap-2 rounded-md px-8"
                >
                  <span>Start quiz</span>
                  <Icons.arrowRight />
                </Link>
              </Button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
