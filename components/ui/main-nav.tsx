'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo-black-lemon.svg';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: '' },
  { name: 'Customers', href: '/dashboard/customers', icon: '' },
  { name: 'Invoices', href: '/dashboard/invoices', icon: '' },
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
        <Menubar className="md:hidden">
          <MenubarMenu>
            <MenubarTrigger onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <AlignJustify />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
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
      </nav>
    </section>
  );
}
