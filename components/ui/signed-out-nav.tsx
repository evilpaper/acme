"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import logo from "@/public/images/logo-black-lemon.svg";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [
  { name: " Features", href: "/features", icon: "" },
  { name: "Pricing", href: "/pricing", icon: "" },
];

export function SignedOutNav({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const page = pathname?.split("/").pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function handleNavClick() {
    setIsNavOpen((old) => !old);
  }
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Mobile */}
      <button className="z-20 w-16 md:hidden" onClick={handleNavClick}>
        <AlignJustify />
      </button>
      <div
        className={cn(
          isNavOpen
            ? "absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-start bg-background p-6 pt-40"
            : "hidden",
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
                    "text-bold flex p-2 text-2xl font-medium text-foreground/80 transition-colors hover:text-foreground",
                    `/${page}` === `/${name.toLowerCase()}`
                      ? "border-b border-black text-foreground"
                      : "border-b border-background text-foreground/80",
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        {children}
      </div>
      <Link href="/" className="md:hidden">
        <Image priority src={logo} alt="ACME Fresh Produce Logo" height="48" />
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
            "flex items-center p-2 text-lg font-medium transition-colors hover:text-foreground/80",
            `/${segment}` === "/features"
              ? "border-b border-black text-foreground"
              : "border-b border-background text-foreground/80",
          )}
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className={cn(
            "flex items-center p-2 text-lg font-medium transition-colors hover:text-foreground/80",
            `/${segment}` === "/pricing"
              ? "border-b border-black text-foreground"
              : "border-b border-background text-foreground/80",
          )}
        >
          Pricing
        </Link>
      </section>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
    </nav>
  );
}
