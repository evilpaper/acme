import Link from "next/link";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Search } from "@/components/ui/search";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCustomerTablePage, getTotalCustomerPages } from "@/data/customer";
import { CustomerPagination } from "@/components/customers/customer-pagination";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalCustomerPages(query);
  const customers = await getCustomerTablePage(query, currentPage);

  return (
    <main className="container flex flex-col space-y-6 px-2">
      <h1
        className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
      >
        Customers
      </h1>
      <section className="flex flex-wrap-reverse gap-6 sm:flex-nowrap">
        <Search />
        <Button asChild>
          <Link href="/dashboard/customers/create" className="w-full sm:w-auto">
            <Icons.add className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">Add customer</span>
          </Link>
        </Button>
      </section>
      <section>
        {/* Table for desktop */}
        <Table className="hidden md:table">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
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
                  <TableCell className="w-0  px-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/dashboard/customers/${id}/edit`}>
                        <Icons.pen className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TableCell>
                  <TableCell className="w-0 px-2">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="icon" asChild>
                          <Link href="#">
                            <Icons.trashcan className="h-4 w-4" />
                          </Link>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete the customer.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        {/* List for mobile */}
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
                    <Link href={`/dashboard/customers/${customer.id}/edit`}>
                      <Icons.pen className="h-4 w-4" />
                    </Link>
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="icon" asChild>
                        <Link href="#">
                          <Icons.trashcan className="h-4 w-4" />
                        </Link>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the customer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <CustomerPagination totalPages={totalPages} />
    </main>
  );
}
