'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Customer } from '@/app/lib/definitions';

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
            <Input
              id="name"
              name="name"
              type="text"
              defaultValue={customer.name}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              defaultValue={customer.email}
            />
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
