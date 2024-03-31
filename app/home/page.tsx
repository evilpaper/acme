import { MainNav } from '@/components/ui/main-nav';
import Link from 'next/link';
import { fraunces } from '../ui/fonts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const widgets = [
  {
    title: 'Collected',
    id: '123',
  },
  {
    title: 'Pending',
    id: '456',
  },
  {
    title: 'Total invoces',
    id: '789',
  },
  {
    title: 'Total customers',
    id: '987',
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <MainNav />
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <nav className="hidden flex-col items-start justify-between gap-6 md:flex">
            <Link
              href="/customers"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              Customers
            </Link>
            <Link
              href="/invoices"
              className="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
            >
              Invoices
            </Link>
          </nav>
        </aside>
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
            {widgets.map(({ title, id }) => {
              return (
                <Card key={id}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                </Card>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
}
