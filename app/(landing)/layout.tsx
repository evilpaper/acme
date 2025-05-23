import React from "react";
import { auth } from "@/auth";
import { Header } from "@/common/components/header";
import { Footer } from "@/common/components/footer";

export default async function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <main className="container flex min-h-screen flex-col px-6">
      <Header isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </main>
  );
}
