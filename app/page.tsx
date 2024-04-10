'use client';

import Link from 'next/link';
import Image from 'next/image';
import { fraunces } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import logo from '../public/images/logo-black-lemon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Page() {
  const segment = useSelectedLayoutSegment();

  return (
    <main className="container flex min-h-screen flex-col">
      <section className="flex justify-between py-6">
        <nav className="gap-6 md:flex">
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <section className="ml-6 hidden gap-10 md:flex">
            <Link
              href="/features"
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                `/${segment}` === '/features'
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                `/${segment}` === '/pricing'
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Pricing
            </Link>
            <Link
              href="/documentation"
              className={cn(
                'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                `/${segment}` === '/documentation'
                  ? 'text-foreground'
                  : 'text-foreground/60',
              )}
            >
              Documentation
            </Link>
          </section>
        </nav>
        <nav>
          <Button asChild>
            <Link href="/login">
              <span>Login</span>
            </Link>
          </Button>
        </nav>
      </section>

      <section className="mt-10 flex grow flex-col gap-4 pb-8 pt-8">
        <div className="align-center flex flex-col items-center">
          <h1
            className={`mb-8 max-w-screen-md p-2 text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl ${fraunces.className}`}
          >
            ACME is an invoicing & payments platform built using Next.js server
            components.
          </h1>
          <div className="flex flex-wrap gap-6">
            <Button asChild>
              <Link href="/login" className="h-11 rounded-md px-8">
                <span>Login</span>
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
      <footer className="container flex flex-col items-center justify-between p-6">
        <p className="text-center text-sm">
          Built by evilpaper. Hosted on Vercel. The source code is available on
          GitHub.
        </p>
      </footer>
    </main>
  );
}
