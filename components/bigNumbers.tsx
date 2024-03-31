import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const widgets = [
  {
    title: 'Collected',
    id: '123',
  },
  {
    title: 'Pending',
    id: '456',
  },
  {
    title: 'Total invoces',
    id: '789',
  },
  {
    title: 'Total customers',
    id: '987',
  },
];

export function BigNumbers() {
  return (
    <>
      {widgets.map(({ title, id }) => {
        return (
          <Card key={id}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
