'use-client';

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

export default function CreateInvoice({
  customers,
}: {
  customers: CustomerField[];
}) {
  return (
    <form>
      <Card className="mx-auto w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
          >
            Create invoice
          </CardTitle>
          <CardDescription>Add a new invoice.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="customer">Choose customer</Label>
            <Select>
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
            <Label htmlFor="number">Choose an amount</Label>
            <Input id="number" placeholder="Enter USD amount" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline">Cancel</Button>
          <Button>Create invoice</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
