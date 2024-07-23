import Link from 'next/link';
import Image from 'next/image';

import { fetchFilteredInvoices } from '@/data/invoice';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Icons } from '../ui/icons';
import { Button } from '../ui/button';
import { InvoiceCard } from './invoice-card';
import { DeleteInvoice } from './delete-invoice-button';

export async function InvoiceTable({
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
          return <InvoiceCard invoice={invoice} key={invoice.id} />;
        })}
      </section>
    </section>
  );
}
