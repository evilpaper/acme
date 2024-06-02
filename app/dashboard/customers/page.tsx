import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchCustomers();

  console.log(customers);
  return (
    <main className="container flex min-h-screen flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Customers
      </h1>
    </main>
  );
}
