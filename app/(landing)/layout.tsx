import React from "react";
import { Header } from "@/common/components/header";
import { Footer } from "@/common/components/footer";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <main className="container flex min-h-screen flex-col px-6">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
