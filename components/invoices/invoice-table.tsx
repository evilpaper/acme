import Image from 'next/image';
import Link from 'next/link';
import { HTMLProps } from 'react';

import { InvoiceView } from '@/data/invoice';
import { formatCurrency } from '@/lib/utils';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { formatDateToLocal } from '@/app/lib/utils';
import { DeleteInvoice } from '@/components/invoices/delete-invoice-button';

export function InvoiceTable({
  invoices,
  className,
}: {
  invoices: InvoiceView[];
  className: HTMLProps<HTMLElement>['className'];
}) {
  return (
    <Table className={className}>
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
  );
}
