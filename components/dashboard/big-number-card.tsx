import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  title: string;
  content: string | number;
  unit: string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}

export function BigNumberCard({ title, content, type }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="py-1 text-muted-foreground">+?% from last month</p>
      </CardContent>
    </Card>
  );
}
