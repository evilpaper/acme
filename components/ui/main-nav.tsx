'use client';

import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import logo from '../../public/images/logo-black-lemon.svg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

import { AlignJustify } from 'lucide-react';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: '' },
  { name: 'Customers', href: '/dashboard/customers', icon: '' },
  { name: 'Invoices', href: '/dashboard/invoices', icon: '' },
];

export function MainNav({ children }: { children: React.ReactElement }) {
  const pathname = usePathname();
  const page = pathname?.split('/').pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function handleNavClick() {
    setIsNavOpen((old) => !old);
  }

  return (
    <section className="container z-40 p-4">
      <nav className="items-center justify-between">
        {/* Desktop */}
        <section className="hidden items-center justify-between gap-6 md:flex">
          <section className="flex items-center justify-between gap-6">
            <Link
              href="/dashboard"
              className="mr-4 hidden items-center space-x-2 md:flex"
            >
              <Image
                priority
                src={logo}
                alt="ACME Fresh Produce Logo"
                height="36"
              />
            </Link>
            {links.map(({ name, href }) => {
              return (
                <Link
                  key={name}
                  href={href}
                  className={cn(
                    'text-medium flex items-center p-2 font-medium text-foreground/80 transition-colors hover:text-foreground',
                    `/${page}` === `/${name.toLowerCase()}`
                      ? 'border-b border-black text-foreground'
                      : 'border-b border-background text-foreground/80',
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </section>
          <section className="flex items-center justify-between gap-6">
            {children}
            <Avatar className="hidden md:flex">
              <AvatarImage src="/customers/amy-burns.png" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </section>
        </section>
        {/* Mobile */}
        <section className="flex items-center justify-between md:hidden">
          <button onClick={handleNavClick}>
            <AlignJustify />
          </button>
          <div
            className={cn(
              isNavOpen
                ? 'absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-evenly bg-background'
                : 'hidden',
            )}
          >
            <div
              className="absolute right-0 top-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex min-h-[250px] flex-col items-center justify-between">
              {links.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link
                      onClick={handleNavClick}
                      href={href}
                      className={cn(
                        'text-medium flex items-center p-2 font-medium text-foreground/80 transition-colors hover:text-foreground',
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
          </div>
          <Link href="/dashboard" className="md:hidden">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <Avatar className="flex md:hidden">
            <AvatarImage src="/customers/amy-burns.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </section>
      </nav>
    </section>
  );
}
