import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Props {
  title: string;
  content: string | number;
  unit: string;
}

export function BigNumberCard({ title, content }: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{content}</div>
        <p className="py-1 text-xs text-muted-foreground">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  );
}
