import { fetchFilteredInvoices } from '@/app/lib/data';
import { formatCurrency, formatDateToLocal } from '@/app/lib/utils';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Button } from './ui/button';
import { Edit2, Trash2 } from 'lucide-react';

export default async function InvoiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <Table>
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
                <Button variant="outline" size="icon">
                  <Edit2 className="h-4 w-4" />
                </Button>
              </TableCell>
              <TableCell className="w-0 px-2">
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
