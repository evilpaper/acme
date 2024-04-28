import { fetchCustomers } from '@/app/lib/data';
import CreateInvoice from '@/components/create-invoice';

export default async function Page() {
  const customers = await fetchCustomers();

  return <CreateInvoice customers={customers} />;
}
