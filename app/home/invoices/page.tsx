import { fetchInvoicesPages } from '@/app/lib/data';
import { fraunces } from '@/app/ui/fonts';
import InvoiceTable from '@/components/invoice-table';
import InvoicePagination from '@/components/invoice-pagination';
import { Search } from '@/components/search';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

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
  const totalPages = await fetchInvoicesPages(query);

  return (
    <main className="container flex min-h-screen flex-col space-y-6">
      <h1
        className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
      <section className="flex gap-6">
        <Search />
        <Button asChild>
          <Link href="/home/invoices/create">
            <Plus className="mr-2 h-4 w-4" />
            Add invoice
          </Link>
        </Button>
      </section>
      <InvoiceTable query={query} currentPage={currentPage} />
      <InvoicePagination totalPages={totalPages} />
    </main>
  );
}
