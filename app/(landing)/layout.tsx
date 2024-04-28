'use client';

import Link from 'next/link';
import Image from 'next/image';
import { fraunces } from '@/app/ui/fonts';
import { Button } from '@/components/ui/button';
import logo from '../../public/images/logo-black-lemon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Page({ children }: { children: React.ReactNode }) {
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
      {children}
      <footer className="container flex flex-col items-center justify-between p-6">
        <p className="text-center text-sm">
          Built by{' '}
          <a
            href="https://evilpaper.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            evilpaper.
          </a>{' '}
          Hosted on{' '}
          <a
            href="https://vercel.com/login"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Vercel.
          </a>{' '}
          The source code is available on{' '}
          <a
            href="https://github.com/evilpaper/acme"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub.
          </a>
        </p>
      </footer>
    </main>
  );
}
