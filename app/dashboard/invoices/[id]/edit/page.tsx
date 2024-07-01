import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { EditInvoice } from '@/components/invoices/edit-invoice';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  const client = customers.find(
    (customer) => customer.id === invoice.customer_id,
  );

  return (
    <EditInvoice invoice={invoice} client={client} customers={customers} />
  );
}
