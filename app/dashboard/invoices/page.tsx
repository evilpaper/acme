import { fetchInvoicesPages } from '@/app/lib/data';
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
    <main className="container flex min-h-screen flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
      <section className="flex gap-6">
        <Search />
        <Button asChild>
          <Link href="/dashboard/invoices/create">
            <Plus className="mr-2 h-4 w-4" />
            <span>Add invoice</span>
          </Link>
        </Button>
      </section>
      <section>
        <InvoiceTable query={query} currentPage={currentPage} />
      </section>

      <InvoicePagination totalPages={totalPages} />
    </main>
  );
}
