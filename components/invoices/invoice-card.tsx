import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { InvoiceView } from "@/data/invoice";
import { DeleteInvoice } from "@/components/invoices/delete-invoice-button";
import { formatCurrency, formatDateToLocal } from "@/app/lib/utils";

export async function InvoiceCard({ invoice }: { invoice: InvoiceView }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Image
              src={invoice.image_url}
              alt={`${invoice.name}&apos;s profile picture`}
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
}
