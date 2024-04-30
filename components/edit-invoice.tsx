'use client';

import { updateInvoice } from '@/app/lib/actions';
import { CustomerField } from '@/app/lib/definitions';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { fraunces } from '@/app/ui/fonts';
import Link from 'next/link';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import React from 'react';

export default function EditInvoice({
  invoice,
  client,
  customers,
}: {
  invoice: {
    amount: number;
    id: string;
    customer_id: string;
    status: 'pending' | 'paid';
  };
  client?: CustomerField;
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);
  // Make the form controlled so we can pass down the current values.
  const [selectedCustomer, setSelectedCustomer] = React.useState(
    client ? client.name : '',
  );
  const [selectedAmount, setSelectedAmount] = React.useState(invoice.amount);
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>
      <Card className="mx-auto w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
          >
            Edit invoice
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="customer">Customer</Label>
            <Select
              required
              name="customerId"
              value={selectedCustomer}
              onValueChange={setSelectedCustomer}
            >
              <SelectTrigger id="customer">
                <SelectValue placeholder={selectedCustomer}>
                  {selectedCustomer}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {customers.map((customer) => {
                  return (
                    <SelectItem key={customer.id} value={customer.name}>
                      {customer.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <div id="customer-error" aria-live="polite" aria-atomic="true">
              {state.errors?.customerId &&
                state.errors.customerId.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              name="amount"
              id="amount"
              type="number"
              required
              defaultValue={selectedAmount}
            />
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.amount &&
                state.errors.amount.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Invoice status</Label>
            <RadioGroup defaultValue={`${invoice.status}`} name="status">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pending" id="pending" />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </RadioGroup>
            <div id="status-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors.status.map((error: string) => (
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
          <Button>Save</Button>
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
