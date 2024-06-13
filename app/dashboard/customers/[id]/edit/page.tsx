import { fetchCustomer } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomer(id);

  return (
    <section>
      <p>Customer: {customer.name}</p>
    </section>
  );
}
