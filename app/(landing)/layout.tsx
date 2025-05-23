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
  return (
    <main className="container flex min-h-screen flex-col px-6">
      <Header session={session} />
      {children}
      <Footer />
    </main>
  );
}
