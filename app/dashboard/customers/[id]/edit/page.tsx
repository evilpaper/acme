import { fetchCustomer } from '@/app/lib/data';
import { Customer } from '@/app/lib/definitions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

/**
 * TODO:
 * [ ] Save changes in history table for audit trail, recovery, conflict prevention and security.
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

function EditCustomer({ customer }: { customer: Customer }) {
  return (
    <form>
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
