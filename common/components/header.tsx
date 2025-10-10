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
import { logout } from "@/app/lib/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <nav className="flex items-center justify-between py-6 z-20">
      {/* Mobile */}
      <button className="z-40 w-16 md:hidden" onClick={handleNavClick}>
        {isNavOpen ? <Icons.close /> : <Icons.hamburger />}
      </button>
      <div
        data-state={isNavOpen ? "open" : "closed"}
        className={
          "fixed inset-0 z-30 flex h-screen w-full flex-col items-start justify-between bg-background p-6 py-28 transition-transform duration-300 data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0"
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
            <>
              <Button asChild variant="outline">
                <Link href="/profile" className="h-11 w-full rounded-md px-8">
                  <span>Profile</span>
                </Link>
              </Button>
              <form action={logout}>
                <Button
                  type="submit"
                  variant="outline"
                  className="h-11 w-full rounded-md px-8"
                >
                  Logout
                </Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="outline">
                <Link href="/login" className="h-11 w-full rounded-md px-8">
                  <span>Login</span>
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/signup" className="h-11 w-full rounded-md px-8">
                  <span>Sign up</span>
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <Link href="/" className="md:hidden">
        <Image priority src={logo} alt="ACME Fresh Produce Logo" height="48" />
      </Link>
      {/* Desktop */}
      <section className="ml-6 hidden gap-10 md:flex justify-between w-full">
        <div className="flex items-center gap-10">
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
        </div>
        {session ? (
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/customers/amy-burns.png" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.user?.name || "User"}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session?.user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <form action={logout} className="w-full">
                    <button type="submit" className="w-full text-left">
                      Logout
                    </button>
                  </form>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button asChild variant="outline">
            <Link href="/login">
              <span>Login</span>
            </Link>
          </Button>
        )}
      </section>
    </nav>
  );
}
