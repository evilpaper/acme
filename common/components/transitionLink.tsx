"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link, { LinkProps } from "next/link";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  async function handleTransition(
    event: React.MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
  ) {
    event.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");
    await sleep(200);
    router.push(href);
    await sleep(200);
    body?.classList.remove("page-transition");
  }

  return (
    <Link
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
