"use client";

import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import { useScrollLock } from "@/hooks/useScrollLock";
import logo from "../../public/images/logo-black-lemon.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: "" },
  { name: "Customers", href: "/dashboard/customers", icon: "" },
  { name: "Invoices", href: "/dashboard/invoices", icon: "" },
  { name: "Cards", href: "/dashboard/cards", icon: "" },
];

export function MainNav({ children }: { children: React.ReactElement }) {
  const pathname = usePathname();
  const page = pathname?.split("/").pop();
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  useScrollLock(isNavOpen);

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
                    "text-medium flex items-center p-2 font-medium text-foreground/80 transition-colors hover:text-foreground",
                    `/${page}` === `/${name.toLowerCase()}`
                      ? "border-b border-black text-foreground"
                      : "border-b border-background text-foreground/80",
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
          <button onClick={handleNavClick} className="z-20">
            {isNavOpen ? <Icons.close /> : <Icons.hamburger />}
          </button>
          <div
            data-state={isNavOpen ? "open" : "closed"}
            className="data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in fixed inset-0 z-10 flex h-screen w-full flex-col justify-between bg-background p-6 py-28
         transition-opacity"
          >
            <ul className="flex min-h-[250px] flex-col items-start justify-between">
              {links.map(({ name, href }) => {
                return (
                  <li key={name}>
                    <Link
                      onClick={handleNavClick}
                      href={href}
                      className={cn(
                        "text-bold flex  p-2 text-xl font-medium text-foreground/80 transition-colors hover:text-foreground",
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
            {children}
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
