'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <section className="mt-10 flex grow flex-col gap-4 pb-8 pt-8">
      <div className="align-center flex flex-col items-center">
        <h1
          className={`mb-8 max-w-screen-md p-2 text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          An example app built using Next.js, Auth.js, Stripe, shadcn/ui and
          Fraunces typeface family.
        </h1>
        <div className="flex flex-wrap gap-6">
          <Button asChild>
            <Link href="/login" className="h-11 rounded-md px-8">
              <span className="font-bold">Login</span>
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
