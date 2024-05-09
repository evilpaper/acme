'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import logo from '../../public/images/logo-black-lemon.svg';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

export default function Page({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();

  return (
    <main className="container flex min-h-screen flex-col px-6">
      <section className="flex justify-between py-6">
        <nav className="flex items-center gap-6">
          <section className="md:hidden">
            <Menubar className="md:hidden">
              <MenubarMenu>
                <MenubarTrigger>
                  <AlignJustify />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    <Link
                      href="/features"
                      className={cn(
                        'flex items-center font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                        `/${segment}` === '/features'
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      Features
                    </Link>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    <Link
                      href="/pricing"
                      className={cn(
                        'flex items-center font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                        `/${segment}` === '/pricing'
                          ? 'text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      Pricing
                    </Link>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </section>
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
                'flex items-center text-lg font-bold transition-colors hover:text-foreground/80',
                `/${segment}` === '/features'
                  ? 'text-foreground'
                  : 'text-foreground/40',
              )}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={cn(
                'flex items-center text-lg font-bold transition-colors hover:text-foreground/80',
                `/${segment}` === '/pricing'
                  ? 'text-foreground'
                  : 'text-foreground/40',
              )}
            >
              Pricing
            </Link>
          </section>
        </nav>
        <nav>
          <Button asChild className="text-md font-bold">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </section>
      {children}
      <footer className="container mt-auto flex flex-col items-center justify-between p-6">
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
      </footer>
    </main>
  );
}
