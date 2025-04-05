import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function Page() {
  return (
    <section className="container flex flex-col gap-10 px-0 md:max-w-[64rem] md:py-12">
      <article className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-5xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Quiz
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Test your knowledge.
        </p>
      </article>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <article className="flex flex-col items-center justify-between gap-6 relative overflow-hidden rounded-lg border bg-background p-8">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            JavaScript 101
          </h1>
          <h3 className="text-center text-xl">
            A bunch of JavaScript questions taken from MDN and JavaScript Info.
          </h3>
          <Button asChild>
            <Link
              href={`/quiz/javascript-101`}
              className="flex h-11 w-fit gap-2 rounded-md px-8"
            >
              <span>Start quiz</span>
              <Icons.arrowRight />
            </Link>
          </Button>
        </article>
        <article className="flex flex-col items-center justify-between gap-6 relative overflow-hidden rounded-lg border bg-background p-8">
          <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl">
            Lydia Hallies JavaScript Questions
          </h1>
          <h3 className="text-center text-xl">
            40 JavaScript questions sourced from Lydia Hallies GitHub
            repository.
          </h3>
          <Button asChild>
            <Link
              href={`/quiz/lydia-hallies-javascript-questions`}
              className="flex h-11 w-fit gap-2 rounded-md px-8"
            >
              <span>Start quiz</span>
              <Icons.arrowRight />
            </Link>
          </Button>
        </article>
      </div>
    </section>
  );
}
