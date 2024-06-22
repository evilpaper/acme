'use client';

import Link from 'next/link';
import { Button } from '../button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../card';
import { Input } from '../input';
import { Label } from '../label';
import { createCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function CreateCustomer() {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <form>
      <Card className="mx-auto md:w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
          >
            Create customer
          </CardTitle>
          <CardDescription className={`text-lg text-muted-foreground`}>
            Add a new customer
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Customer name</Label>
            <Input name="name" id="name" type="text" required />
            {/* <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div> */}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Customer email</Label>
            <Input name="email" id="email" type="email" required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" asChild>
            <Link href="/dashboard/invoices">Cancel</Link>
          </Button>
          <Button variant="default">Create customer</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
