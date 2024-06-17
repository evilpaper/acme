import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../card';
import { Input } from '../input';
import { Button } from '../button';
import Link from 'next/link';
import { Customer } from '@/app/lib/definitions';
import { Label } from '../label';
import { updateCustomer } from '@/app/lib/actions';

export default function EditCustomer({ customer }: { customer: Customer }) {
  const updateCustomerWithId = updateCustomer.bind(null, customer.id);
  return (
    <form action={updateCustomerWithId}>
      <Card className="mx-auto md:w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
          >
            Edit customer
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder={customer.name} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">email</Label>
            <Input id="email" type="email" placeholder={customer.email} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" asChild>
            <Link href="/dashboard/customers">Cancel</Link>
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
