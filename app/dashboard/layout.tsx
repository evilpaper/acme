import { signOut } from '@/auth';
import { Button } from '@/components/ui/button';
import { MainNav } from '@/components/ui/main-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col space-y-6">
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
            <Button variant="outline">Sign Out</Button>
          </form>
        </MainNav>
      </header>
      <div className="container grid flex-1 gap-12">{children}</div>
    </div>
  );
}
