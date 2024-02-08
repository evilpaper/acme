import Link from 'next/link';
import { fraunces } from '@/app/ui/fonts';
import logo from '../public/images/yellow-lemon.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="hero flex flex-col">
      <Image
        priority
        src={logo}
        alt="ACME Fresh Produce Logo"
        height="64"
        className="m-8"
      />
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="align-center flex flex-col items-center">
          <h1
            className={`tracking-tightertext-gray-600 mb-8 max-w-screen-md p-2 text-center text-3xl font-bold leading-tight md:text-5xl ${fraunces.className}`}
          >
            ACME is an invoicing & payments platform built using Next.js 14
            server components.
          </h1>
          <div className="flex flex-wrap gap-5">
            <Button asChild>
              <Link href="/login">
                <span>Sign in</span>
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup">
                <span>Sign up</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
