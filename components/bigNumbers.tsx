import React from 'react';
import { fetchCardData } from '@/app/lib/data';
import { BigNumberCard } from './bigNumberCard';

export async function BigNumbers() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <BigNumberCard
        title="Number of invoices"
        unit="$"
        content={numberOfInvoices}
      ></BigNumberCard>
      <BigNumberCard
        title="Number of customers"
        unit="customers"
        content={numberOfCustomers}
      ></BigNumberCard>
      <BigNumberCard
        title="Total paid invoices"
        unit="$"
        content={totalPaidInvoices}
      ></BigNumberCard>
      <BigNumberCard
        title="Total pending invoices"
        unit="$"
        content={totalPendingInvoices}
      ></BigNumberCard>
    </>
  );
}
