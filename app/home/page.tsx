import { MainNav } from '@/components/ui/main-nav';
import Link from 'next/link';
import { fraunces } from '../ui/fonts';
import { BigNumbers } from '@/components/bigNumbers';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Overview } from '@/components/overview';
import { LatestInvoices } from '@/components/latest-invoices';
import { signOut } from '@/auth';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        {/**
         * MainNav is a client component. We can't use the directive "use server" in client component.
         * Thus passing it down as children from a server component.
         * Not the most beautiful solution.
         * Why is "use server" needed? From the error message it looks like sighOut tries to acces the filesystem
         * with "fs".
         */}
        <MainNav>
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </MainNav>
      </header>
      <div className="container grid flex-1 gap-12">
        <main className="flex w-full flex-1 flex-col gap-4 overflow-hidden">
          <section>
            <h1
              className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
            >
              Dashboard
            </h1>
            <p
              className={`py-2 text-lg text-muted-foreground ${fraunces.className}`}
            >
              Monitor your performance
            </p>
          </section>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BigNumbers></BigNumbers>
          </section>
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="mb-4 text-lg">Recent Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle className="mb-4 text-lg">Latest Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <LatestInvoices />
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
