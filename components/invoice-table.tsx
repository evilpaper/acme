import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <section>
      <p>Invoice Table</p>
      <ul>
        {invoices?.map((invoice) => {
          return <li key={invoice.id}>{invoice.name}</li>;
        })}
      </ul>
    </section>
  );
}
