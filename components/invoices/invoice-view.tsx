import { InvoiceCard } from './invoice-card';
import { fetchFilteredInvoices } from '@/data/invoice';
import { InvoiceTable } from '@/components/invoices/invoice-table';

export async function InvoiceView({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <section>
      {/* Table for desktop */}
      <InvoiceTable invoices={invoices} className="hidden md:table" />
      {/* List for mobile */}
      <ul className="flex flex-col gap-6 md:hidden">
        {invoices?.map((invoice) => {
          return (
            <li key={invoice.id}>
              <InvoiceCard invoice={invoice} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
