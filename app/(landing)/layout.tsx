"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ModeSwitch } from "@/components/ui/mode-switch";
import logo from "../../public/images/logo-black-lemon.svg";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

const links = [
  { name: "Quiz", href: "/quiz", icon: "" },
  { name: "Features", href: "/features", icon: "" },
  { name: "Pricing", href: "/pricing", icon: "" },
];

export default function Page({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const page = pathname?.split("/").pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  useScrollLock(isNavOpen);

  function handleNavClick() {
    setIsNavOpen((old) => !old);
  }

  return (
    <main className="container flex min-h-screen flex-col px-6">
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
                      "text-bold flex flex items-center p-2 text-xl font-medium text-foreground/80 transition-colors hover:text-foreground",
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
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </nav>
      {children}
      <footer className="container mt-auto flex flex-col items-center justify-between gap-6 p-6 md:flex-row">
        <section>
          <p className="text-center text-sm">
            Built by{" "}
            <a
              href="https://evilpaper.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              evilpaper.
            </a>{" "}
            Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel.
            </a>{" "}
            The source code is available on{" "}
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
