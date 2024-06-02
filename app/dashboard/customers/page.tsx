import { fetchCustomers } from '@/app/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
      <div className="space-y-8">
        {customers.map((customer) => {
          return (
            <div className="flex items-center" key={customer.id}>
              <Avatar className="h-9 w-9">
                <AvatarImage src="/customers/amy-burns.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="font-medium leading-none">{customer.name}</p>
                <p className="text-muted-foreground">{customer.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
