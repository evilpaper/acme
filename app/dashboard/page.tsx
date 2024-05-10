import { fraunces } from '../ui/fonts';
import { BigNumbers } from '@/components/big-numbers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LatestInvoices } from '@/components/latest-invoices';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container grid flex-1 gap-12 px-2">
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
            {/* <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="mb-4 text-lg">Recent Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card> */}
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
