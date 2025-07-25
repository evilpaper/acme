"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/useScrollLock";
import logo from "../../public/images/logo-black-lemon.svg";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const links = [
  { name: "Cards", href: "/cards", icon: "" },
  { name: "Quizzes", href: "/quizzes", icon: "" },
  { name: "Features", href: "/features", icon: "" },
  { name: "Pricing", href: "/pricing", icon: "" },
];

export function Header({ session }: { session: Session | null }) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const page = pathname?.split("/").pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  useScrollLock(isNavOpen);

  function handleNavClick() {
    setIsNavOpen((old) => !old);
  }
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Mobile */}
      <button className="z-20 w-16 md:hidden" onClick={handleNavClick}>
        {isNavOpen ? <Icons.close /> : <Icons.hamburger />}
      </button>
      <div
        data-state={isNavOpen ? "open" : "closed"}
        className={
          "fixed inset-0 z-10 flex h-screen w-full flex-col items-start justify-between bg-background p-6 py-28 transition-transform duration-300 data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0"
        }
      >
        <ul className="flex flex-col items-start justify-between gap-12">
          {links.map(({ name, href }) => {
            return (
              <li key={name}>
                <Link
                  onClick={handleNavClick}
                  href={href}
                  className={cn(
                    "text-bold flex items-center p-2 text-xl font-medium text-foreground/80 transition-colors hover:text-foreground",
                    `/${page}` === `/${name.toLowerCase()}`
                      ? "border-b border-black text-foreground"
                      : "border-b border-background text-foreground/80",
                  )}
                >
                  {name}
                  <Icons.arrowRight className="ml-4" />
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex w-full flex-col gap-4">
          {session ? (
            <Button asChild>
              <Link href="/dashboard" className="h-11 w-full rounded-md px-8">
                <span>Go to Dashboard</span>
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login" className="h-11 w-full rounded-md px-8">
                <span>Login</span>
              </Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href="/signup" className="h-11 w-full rounded-md px-8">
              <span>Sign up</span>
            </Link>
          </Button>
        </div>
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
        <ul className="flex items-start justify-between gap-12">
          {links.map(({ name, href }) => {
            return (
              <li key={name}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center p-2 text-lg font-medium transition-colors hover:text-foreground/80",
                    `/${segment}` === href
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
      </section>
      {session ? (
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/dashboard">
              <span>Go to Dashboard</span>
            </Link>
          </Button>
          <Avatar className="hidden md:flex">
            <AvatarImage src="/customers/amy-burns.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <Button asChild>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </Button>
      )}
    </nav>
  );
}
