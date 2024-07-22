import { getCustomers } from '@/data/customer';
import { CreateInvoice } from '@/components/invoices/create-invoice';

export default async function Page() {
  const customers = await getCustomers();

  return <CreateInvoice customers={customers} />;
}
