import * as React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/icons';
import Image from 'next/image';
import logo from '../../public/images/logo-black-lemon.svg';

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Image priority src={logo} alt="ACME Fresh Produce Logo" height="48" />

        <span className="hidden font-bold sm:inline-block">
          <p>I am main nav.</p>
        </span>
      </Link>
    </div>
  );
}
