import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function Page() {
  return (
    <section className="grid items-center justify-center gap-6">
      <div className="flex max-w-xl flex-col items-center gap-6 pb-12 pt-12 border rounded-md p-8">
        <h1 className="text-center text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
          JavaScript 101
        </h1>
        <h3 className="text-center text-xl">
          A bunch of JavaScript questions taken from MDN and JavaScript Info.
        </h3>
        <Button asChild>
          <Link
            href="/quiz/javascript"
            className="flex h-11 w-fit gap-2 rounded-md px-8"
          >
            <span>Start quiz</span>
            <Icons.arrowRight />
          </Link>
        </Button>
      </div>
      <div className="flex max-w-xl flex-col items-center gap-6 pb-12 pt-12 border rounded-md p-8">
        <h1 className="text-center text-5xl font-bold leading-tight tracking-tighter md:text-6xl">
          Lydia Hallies JavaScript Questions
        </h1>
        <h3 className="text-center text-xl">
          40 JavaScript questions sourced from Lydia Hallies GitHub repository.
        </h3>
        <Button asChild>
          <Link
            href="/quiz/lydia-hallie"
            className="flex h-11 w-fit gap-2 rounded-md px-8"
          >
            <span>Start quiz</span>
            <Icons.arrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
