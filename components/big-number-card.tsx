import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Icons } from '@/components/ui/icons';

interface Props {
  title: string;
  content: string | number;
  unit: string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}

const iconMap = {
  collected: Icons.collected,
  customers: Icons.customers,
  pending: Icons.pending,
  invoices: Icons.inbox,
};

export function BigNumberCard({ title, content, type }: Props) {
  const Icon = iconMap[type];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="py-1 text-xs text-muted-foreground">
          +?% from last month
        </p>
      </CardContent>
    </Card>
  );
}
