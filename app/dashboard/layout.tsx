import { signOut } from '@/auth';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/ui/main-nav';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-6">
      <header className="sticky top-0 z-40 bg-background">
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
            <Button variant="outline">Sign out</Button>
          </form>
        </MainNav>
      </header>
      <div className="container grid flex-1 gap-12 px-5">{children}</div>
      <form
        className="flex items-center justify-center p-2 md:hidden"
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Button variant="outline">Sign out</Button>
      </form>
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:hidden">
        <Link
          href="/dashboard/customers"
          className="flex items-center justify-center px-4 py-2 text-center text-sm transition-colors hover:text-foreground/80"
        >
          Customers
        </Link>
        <Link
          href="/dashboard/invoices"
          className="flex items-center justify-center px-4 py-2 text-center text-sm transition-colors hover:text-foreground/80"
        >
          Invoices
        </Link>
        <ModeToggle />
      </section>
    </div>
  );
}
