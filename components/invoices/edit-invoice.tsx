"use client";

import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Customer } from "@/data/customer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateInvoice } from "@/app/lib/actions";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function EditInvoice({
  invoice,
  client,
  customers,
}: {
  invoice: {
    amount: number;
    id: string;
    customer_id: string;
    status: "pending" | "paid";
  };
  client?: Customer;
  customers: Customer[];
}) {
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>
      <Card className="mx-auto md:w-[396px]">
        <CardHeader>
          <CardTitle
            className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
          >
            Edit invoice
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="customer">Customer</Label>
            <Select
              required
              name="customerId"
              defaultValue={client ? client.id : "Customer"}
            >
              <SelectTrigger id="customer">
                <SelectValue placeholder={client ? client.name : "Customer"} />
              </SelectTrigger>
              <SelectContent>
                {customers.map((customer) => {
                  return (
                    <SelectItem key={customer.id} value={customer.id}>
                      {customer.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              name="amount"
              id="amount"
              type="number"
              required
              defaultValue={invoice.amount}
            />
          </div>
          <div className="grid gap-2">
            <Label>Invoice status</Label>
            <RadioGroup defaultValue={`${invoice.status}`} name="status">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="pending" id="pending" />
                <Label htmlFor="pending">Pending</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paid" id="paid" />
                <Label htmlFor="paid">Paid</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button variant="outline" asChild>
            <Link href="/dashboard/invoices">Cancel</Link>
          </Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
