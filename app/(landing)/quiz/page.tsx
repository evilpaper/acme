import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

export default function Page() {
  return (
    <section className="grid items-center justify-center">
      <div className="flex max-w-xl flex-col items-center gap-6 pb-12 pt-24">
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
            <span>Try now</span>
            <Icons.arrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
