'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from '../../public/images/logo-black-lemon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeSwitch } from '@/components/ui/mode-switch';
import { AlignJustify } from 'lucide-react';

export default function Page({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <main className="container flex min-h-screen flex-col px-6">
      <nav className="flex items-center justify-between gap-6 py-6">
        {/* Mobile */}
        <AlignJustify className="md:hidden" />
        <Link href="/" className="md:hidden">
          <Image
            priority
            src={logo}
            alt="ACME Fresh Produce Logo"
            height="48"
          />
        </Link>
        {/* Desktop */}
        <section className="ml-6 hidden gap-10 md:flex">
          <Link href="/">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <Link
            href="/features"
            className={cn(
              'flex items-center p-2 text-lg font-medium transition-colors hover:text-foreground/80',
              `/${segment}` === '/features'
                ? 'border-b border-black text-foreground'
                : 'border-b border-background text-foreground/80',
            )}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={cn(
              'flex items-center p-2 text-lg font-medium transition-colors hover:text-foreground/80',
              `/${segment}` === '/pricing'
                ? 'border-b border-black text-foreground'
                : 'border-b border-background text-foreground/80',
            )}
          >
            Pricing
          </Link>
        </section>
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </nav>
      {children}
      <footer className="container mt-auto flex flex-col items-center justify-between p-6 md:flex-row">
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
            href="https://vercel.com"
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
        <section className="md:hidden">
          <Link
            href="/features"
            className={cn(
              'mt-4 flex items-center justify-center px-4 py-2 text-center text-sm transition-colors hover:text-foreground/80',
              `/${segment}` === '/features'
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={cn(
              'flex items-center justify-center px-4 py-2 text-center text-sm transition-colors hover:text-foreground/80',
              `/${segment}` === '/pricing'
                ? 'text-foreground'
                : 'text-foreground/80',
            )}
          >
            Pricing
          </Link>
        </section>
        <ModeSwitch />
      </footer>
    </main>
  );
}
