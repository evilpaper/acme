import { fetchCustomer } from '@/app/lib/data';
import EditCustomer from '@/components/customers/edit-customer';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomer(id);

  return (
    <section>
      <EditCustomer customer={customer} />
    </section>
  );
}
