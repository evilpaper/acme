import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import acmeLogo from '../public/images/acme-fresh-produce.svg';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex flex-col">
      <Image priority src={acmeLogo} alt="Follow us on Twitter" height="128" />
      <div className="mt-4 flex grow flex-col gap-4">
        <div className="align-center flex flex-col items-center">
          <h1
            className={`max-w-screen-md text-center text-4xl font-bold leading-normal leading-tight text-gray-700 ${lusitana.className}`}
          >
            Fresh Produce is an invoicing & payments platform built using
            Next.js 14 server components.
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
