'use client';

import { CustomerField } from '@/app/lib/definitions';
import {
  Card,
  CardContent,
  CardDescription,
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

export default function EditInvoice({
  invoice,
  customers,
}: {
  invoice: {
    amount: number;
    id: string;
    customer_id: string;
    status: 'pending' | 'paid';
  };
  customers: CustomerField[];
}) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createInvoice, initialState);

  const client = customers.find(
    (customer) => customer.id === invoice.customer_id,
  );
  const name = client?.name || 'Customer';

  return (
    <form action={dispatch}>
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
            <Select required name="customerId">
              <SelectTrigger id="customer">
                <SelectValue placeholder={name} />
              </SelectTrigger>
              <SelectContent>
                {customers.map((customer) => {
                  return (
                    <SelectItem key={customer.id} value={customer.id}>
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
            <Label htmlFor="amount">Choose an amount</Label>
            <Input
              name="amount"
              id="amount"
              placeholder="Enter USD amount"
              type="number"
              required
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
            <Label>Set the invoice status</Label>
            <RadioGroup defaultValue="pending" name="status">
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
            <Link href="/home/invoices">Cancel</Link>
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
