import { fetchFilteredInvoices } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Button } from './ui/button';
import { Icons } from './ui/icons';
import DeleteInvoice from './delete-invoice-button';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <section>
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices?.map((invoice) => {
            return (
              <TableRow key={invoice.id}>
                <TableCell className="flex items-center font-medium">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  {invoice.name}
                </TableCell>
                <TableCell>{invoice.email}</TableCell>
                <TableCell> {formatCurrency(invoice.amount)}</TableCell>
                <TableCell>{formatDateToLocal(invoice.date)}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell className="w-0  px-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                      <Icons.pen className="h-4 w-4" />
                    </Link>
                  </Button>
                </TableCell>
                <TableCell className="w-0 px-2">
                  <DeleteInvoice id={invoice.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <section className="flex flex-col gap-6 md:hidden">
        {invoices?.map((invoice) => {
          return (
            <Card key={invoice.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Image
                      src={invoice.image_url}
                      alt={`${invoice.name}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    {invoice.name}
                  </span>
                  <span>{formatCurrency(invoice.amount)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <dl className="flex justify-between">
                  <dt>{formatDateToLocal(invoice.date)}</dt>
                  <dd>{invoice.status}</dd>
                </dl>
              </CardContent>
              <CardFooter className="flex justify-between">
                <DeleteInvoice id={invoice.id} />
                <Button variant="outline" size="icon" asChild>
                  <Link href={`/dashboard/invoices/${invoice.id}/edit`}>
                    <Icons.pen className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </section>
    </section>
  );
}
