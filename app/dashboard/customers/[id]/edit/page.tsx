import { fetchCustomer } from '@/app/lib/data';
import EditCustomer from '@/components/ui/customers/edit-customer';

/**
 * TODO:
 * [ ] Save changes in a history table for audit trail, recovery, conflict prevention and security.
 */

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const customer = await fetchCustomer(id);

  return (
    <section>
      <EditCustomer customer={customer} />
    </section>
  );
}
