import { fetchInvoiceById } from "@/data/invoice";
import { EditInvoice } from "@/components/invoices/edit-invoice";
import { getCustomers } from "@/data/customer";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    getCustomers(),
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
