import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { fraunces } from '@/app/ui/fonts';
import logo from '../public/images/lemon.svg';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col">
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
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Sign in</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/signup"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Sign up</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
