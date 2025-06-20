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
          A flashcard quiz app for developers.
        </p>
        <div className="mb-8 flex flex-col flex-wrap gap-6 sm:flex-row">
          <Button asChild>
            <Link
              href="/quizzes/javascript-101"
              className="h-11 rounded-md px-8"
            >
              <span>Try a quiz</span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/quizzes" className="h-11 rounded-md px-8">
              <span>See all quizzes</span>
            </Link>
          </Button>
        </div>
        <p className="max-w-screen-sm text-center text-xl md:text-2xl">
          Built as an example app using Next.js, Auth.js, Stripe, shadcn/ui and
          Fraunces typeface family.
        </p>
      </div>
    </section>
  );
}
