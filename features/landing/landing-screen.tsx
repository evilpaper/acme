import Link from "next/link";
import { Button } from "@/components/ui/button";

export async function LandingScreen() {
  return (
    <section className="mt-1 md:mt-10 flex flex-col pb-8 pt-8">
      <div className="align-center flex flex-col items-center">
        <h1 className="mb-4 max-w-screen-md p-2 text-center text-4xl font-bold tracking-tighter md:text-6xl">
          Practice makes perfect. <br /> Or actually permanent... but you get
          it.
        </h1>
        <p className="mb-8 max-w-screen-sm text-center text-xl md:text-2xl">
          Cards and quizzes for spaced repetition.
        </p>
        <div className="mb-8 flex flex-col flex-wrap gap-6 sm:flex-row">
          <Button asChild>
            <Link
              href="/cards/javascript-101"
              className="rounded-md px-8 py-6 text-lg flex justify-center items-center"
            >
              <span>Try some cards</span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link
              href="/cards"
              className="rounded-md px-8 py-6 text-lg flex justify-center items-center"
            >
              <span>See all cards</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
