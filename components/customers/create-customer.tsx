'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { createCustomer } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export default function CreateCustomer() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createCustomer, initialState);

  return (
    <form action={dispatch}>
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
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Customer email</Label>
            <Input name="email" id="email" type="email" required />
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" asChild>
            <Link href="/dashboard/invoices">Cancel</Link>
          </Button>
          <CreateButton />
        </CardFooter>
        <div aria-live="polite" aria-atomic="true">
          {state.message ? (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          ) : null}
        </div>
      </Card>
    </form>
  );
}

function CreateButton() {
  const { pending } = useFormStatus();
  return (
    <Button>
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      Create customer
    </Button>
  );
}
