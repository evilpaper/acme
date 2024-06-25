import { BigNumbers } from '@/components/big-numbers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatestInvoices } from '@/components/latest-invoices';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container grid flex-1 gap-12 px-2">
        <main className="flex w-full flex-1 flex-col gap-4 overflow-hidden">
          <section>
            <h1
              className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
            >
              Dashboard
            </h1>
            <p className={`py-2 text-lg text-muted-foreground`}>
              Monitor your performance
            </p>
          </section>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense
              fallback={
                <>
                  <Skeleton className="h-[140px] w-full rounded-lg" />
                  <Skeleton className="h-[140px] w-full rounded-lg" />
                  <Skeleton className="h-[140px] w-full rounded-lg" />
                  <Skeleton className="h-[140px] w-full rounded-lg" />
                </>
              }
            >
              <BigNumbers />
            </Suspense>
          </section>
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Suspense fallback="Loading...">
              <Card className="col-span-3 hidden md:block">
                <CardHeader>
                  <CardTitle className="mb-4 text-lg">
                    Latest Invoices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LatestInvoices />
                </CardContent>
              </Card>
            </Suspense>
          </section>
        </main>
      </div>
    </div>
  );
}
