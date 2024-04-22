'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo-black-lemon.svg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
  { name: 'Home', href: '/home', icon: '' },
  { name: 'Customers', href: '/home/customers', icon: '' },
  { name: 'Invoices', href: '/home/invoices', icon: '' },
];

export function MainNav({ children }: { children: React.ReactElement }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const pathname = usePathname();
  const page = pathname?.split('/').pop();

  return (
    <section className="container z-40 p-4">
      <nav className="hidden items-center justify-between gap-6 md:flex">
        <section className="items-center justify-between gap-6 md:flex">
          <Link
            href="/home"
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
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  `/${page}` === `/${name.toLowerCase()}`
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                {name}
              </Link>
            );
          })}
        </section>
        <section className="items-center justify-between gap-6 md:flex">
          {children}
          <Avatar className="hidden md:flex">
            <AvatarImage src="/customers/amy-burns.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </section>
      </nav>
      <nav className="flex items-center justify-between md:hidden">
        <button
          className="space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="font-bold">Menu</span>
        </button>
        <Link href="/home" className="md:hidden">
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
      </nav>
    </section>
  );
}
