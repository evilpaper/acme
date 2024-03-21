'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo-black-lemon.svg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <header className="container z-40">
      <div className="flex h-20 items-center justify-between py-6">
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/home" className="hidden items-center space-x-2 md:flex">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <Link
            href="/customers"
            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
          >
            Customers
          </Link>
          <Link
            href="/invoices"
            className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
          >
            Invoices
          </Link>
        </nav>
        <Avatar className="hidden md:flex">
          <AvatarImage src="/customers/amy-burns.png" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <button
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <span className="font-bold">Menu</span>
        </button>
      </div>
    </header>
  );
}
