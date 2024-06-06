import { fetchCustomers } from '@/app/lib/data';
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

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main className="container flex min-h-screen flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Customers
      </h1>
      <Search />
      <section className="space-y-8">
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
      </section>
    </main>
  );
}
