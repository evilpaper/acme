import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import EditInvoice from '@/components/edit-invoice';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return <EditInvoice invoice={invoice} customers={customers} />;
}
