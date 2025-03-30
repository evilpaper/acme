import { Suspense } from "react";

import { LatestInvoices } from "@/components/dashboard/latest-invoices";
import { BigNumberCards } from "@/components/dashboard/big-number-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LatestInvoicesSkeleton } from "@/components/dashboard/latest-invoices-skeleton";
import { BigNumberCardsSkeleton } from "@/components/dashboard/big-number-cards-skeleton";

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="container px-2">
        <main className="flex w-full flex-1 flex-col gap-6">
          <section>
            <h1
              className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
            >
              Dashboard
            </h1>
          </section>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<BigNumberCardsSkeleton />}>
              <BigNumberCards />
            </Suspense>
          </section>
          <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-6  ">
            <Card className="col-span-3 hidden md:block">
              <CardHeader>
                <CardTitle className="mb-4 text-lg">Latest Invoices</CardTitle>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                  <LatestInvoices />
                </Suspense>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  );
}
