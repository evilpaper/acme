"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className: string;
}

export function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
