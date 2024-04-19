import { fetchCustomers } from '@/app/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <form>
      <Card className="mx-auto w-[512px]">
        <CardHeader>
          <CardTitle>Create invoice</CardTitle>
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
        <CardFooter>
          <Button className="w-full">Create invoice</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
