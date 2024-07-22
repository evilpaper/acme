import { getCustomer } from '@/data/customer';
import EditCustomer from '@/components/customers/edit-customer';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await getCustomer(id);

  return (
    <section>
      <EditCustomer customer={customer} />
    </section>
  );
}
