import Link from 'next/link';

import { Icons } from '@/components/ui/icons';
import { Search } from '@/components/ui/search';
import { Button } from '@/components/ui/button';
import { getTotalNumberofInvoicePages } from '@/data/invoice';
import { InvoiceView } from '@/components/invoices/invoice-view';
import { InvoicePagination } from '@/components/invoices/invoice-pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalNumberofInvoicePages(query);

  return (
    <main className="container flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
      <section className="flex flex-wrap-reverse gap-6 sm:flex-nowrap">
        <Search />
        <Button asChild>
          <Link href="/dashboard/invoices/create" className="w-full sm:w-auto">
            <Icons.add className="mr-2 h-4 w-4" />
            <span>Add invoice</span>
          </Link>
        </Button>
      </section>
      <InvoiceView query={query} currentPage={currentPage} />
      <InvoicePagination totalPages={totalPages} />
    </main>
  );
}
