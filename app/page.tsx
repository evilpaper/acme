/**
 * Inspiration
 * Taxonomy, for complete working app, by shadcn https://tx.shadcn.com/
 * En Temporada, for playful design https://www.entemporada.es/
 * Fraunces, the font used https://maxibestof.one/typefaces/fraunces
 */

import Link from 'next/link';
import { fraunces } from '@/app/ui/fonts';
import logo from '../public/images/yellow-lemon.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <main className="hero flex h-screen flex-col p-8">
      <section className="flex justify-between">
        <nav className="gap-6 md:flex">
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <div className="hidden gap-10 md:flex">
            <Link className="flex items-center" href="/">
              Features
            </Link>
            <Link className="flex items-center" href="/">
              Pricing
            </Link>
            <Link className="flex items-center" href="/">
              Documentation
            </Link>
          </div>
        </nav>
        <nav>
          <Button asChild>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </Button>
        </nav>
      </section>

      <section className="mt-20 flex grow flex-col gap-4 pb-8 pt-8">
        <div className="align-center flex flex-col items-center">
          <h1
            className={`tracking-tightertext-gray-600 mb-8 max-w-screen-md p-2 text-center text-3xl font-bold leading-tight md:text-5xl ${fraunces.className}`}
          >
            ACME is an invoicing & payments platform built using Next.js server
            components.
          </h1>
          <div className="flex flex-wrap gap-6">
            <Button asChild>
              <Link href="/login">
                <span>Login</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup">
                <span>Sign up</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer className="container flex flex-col items-center justify-between">
        <p className="text-sm">
          Built by evilpaper. Hosted on Vercel. The source code is available on
          GitHub.
        </p>
      </footer>
    </main>
  );
}
