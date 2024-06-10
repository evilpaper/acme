import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
import { Search } from '@/components/search';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <main className="container flex min-h-screen flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Customers
      </h1>
      <Search />
      <section>
        <Table className="hidden md:table">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Total invoice amount</TableHead>
              <TableHead>Last invoice</TableHead>
              <TableHead></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map(({ id, image_url, name, email }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="flex items-center font-medium">
                    <Image
                      src={image_url}
                      alt={`${name}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    {name}
                  </TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="w-0  px-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#">
                        <Icons.pen className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell className="w-0 px-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="#">
                        <Icons.trashcan className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <ul className="space-y-8 md:hidden">
          {customers.map((customer) => {
            return (
              <li
                key={customer.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center justify-between">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={customer.image_url} alt="Avatar" />
                    <AvatarFallback>{customer.name}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {customer.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {customer.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#">
                      <Icons.pen className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="#">
                      <Icons.trashcan className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
