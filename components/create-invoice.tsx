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

export default function CreateInvoice({
  customers,
}: {
  customers: CustomerField[];
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log('Form submitted!');
      }}
    >
      <Card className="mx-auto w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
          >
            Create invoice
          </CardTitle>
          <CardDescription
            className={`text-lg text-muted-foreground ${fraunces.className}`}
          >
            Add a new invoice
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="customer">Choose customer</Label>
            <Select required>
              <SelectTrigger id="customer">
                <SelectValue placeholder="Customer" />
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
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Choose an amount</Label>
            <Input
              id="amount"
              placeholder="Enter USD amount"
              type="number"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label>Set the invoice status</Label>
            <RadioGroup defaultValue="pending">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pending" id="pending" />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" asChild>
            <Link href="/home/invoices">Cancel</Link>
          </Button>
          <Button>Create invoice</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
