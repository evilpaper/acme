import { MainNav } from '@/components/ui/main-nav';
import Link from 'next/link';
import { fraunces } from '../ui/fonts';
import { BigNumbers } from '@/components/bigNumbers';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <MainNav />
      </header>
      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <h1
            className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
          >
            Home
          </h1>
          <p
            className={`py-4 text-lg text-muted-foreground ${fraunces.className}`}
          >
            Monitor your performance
          </p>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BigNumbers></BigNumbers>
          </section>
        </main>
      </div>
    </div>
  );
}
