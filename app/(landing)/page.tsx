import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <section className="mt-10 flex grow flex-col gap-4 pb-8 pt-8">
      <div className="align-center flex flex-col items-center">
        <h1 className="mb-4 max-w-screen-md p-2 text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
          An example app in the form of a Quiz app for developers
        </h1>
        <p className="mb-8 max-w-screen-sm text-center text-2xl">
          Built using Next.js, Auth.js, Stripe, shadcn/ui and Fraunces typeface
          family.
        </p>
        <div className="flex flex-wrap gap-6">
          <Button asChild>
            <Link href="/quiz" className="h-11 rounded-md px-8">
              <span>Take me to the quiz</span>
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup" className="h-11 rounded-md px-8">
              <span>Sign up</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
