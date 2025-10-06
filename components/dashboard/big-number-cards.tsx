import React from "react";
import { fetchCardData } from "@/data/dashboard";
import { BigNumberCard } from "@/components/dashboard/big-number-card";

export async function BigNumberCards() {
  const { numberOfCustomers } = await fetchCardData();

  return (
    <>
      <BigNumberCard
        title="Number of customers"
        unit="customers"
        content={numberOfCustomers}
        type="customers"
      ></BigNumberCard>
    </>
  );
}
