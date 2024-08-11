'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from '../../public/images/logo-black-lemon.svg';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeSwitch } from '@/components/ui/mode-switch';
import { AlignJustify } from 'lucide-react';

const links = [
  { name: ' Features', href: '/features', icon: '' },
  { name: 'Pricing', href: '/pricing', icon: '' },
];

export default function Page({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const page = pathname?.split('/').pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function handleNavClick() {
    setIsNavOpen((old) => !old);
  }

  return (
    <main className="container flex min-h-screen flex-col px-6">
      <nav className="flex items-center justify-between py-6">
        {/* Mobile */}
        <button className="z-20 w-16 md:hidden" onClick={handleNavClick}>
          <AlignJustify />
        </button>
        <div
          className={cn(
            isNavOpen
              ? 'absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-start justify-between bg-background p-6 pt-40'
              : 'hidden',
          )}
        >
          <ul className="flex flex-col items-start justify-between gap-12">
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link
                    onClick={handleNavClick}
                    href={href}
                    className={cn(
                      'text-bold flex p-2 text-xl font-medium text-foreground/80 transition-colors hover:text-foreground',
                      `/${page}` === `/${name.toLowerCase()}`
                        ? 'border-b border-black text-foreground'
                        : 'border-b border-background text-foreground/80',
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex w-full flex-col gap-8">
            <Button asChild>
              <Link href="/login" className="h-11 w-full rounded-md px-8">
                <span>Login</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/signup" className="h-11 w-full rounded-md px-8">
                <span>Sign up</span>
              </Link>
            </Button>
          </div>
        </div>
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
      <footer className="container mt-auto flex flex-col items-center justify-between gap-6 p-6 md:flex-row">
        <section>
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
        </section>
        <ModeSwitch />
      </footer>
    </main>
  );
}
