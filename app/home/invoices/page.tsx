import { fetchInvoicesPages } from '@/app/lib/data';
import { fraunces } from '@/app/ui/fonts';
import InvoiceTable from '@/components/invoice-table';
import { Search } from '@/components/search';

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
    <main className="flex min-h-screen flex-col space-y-6">
      <h1
        className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
      <Search />
      <InvoiceTable query={query} currentPage={currentPage} />
    </main>
  );
}
