'use client';

import React from 'react';
import { Input } from './ui/input';

export function Search() {
  const [value, setValue] = React.useState('');

  return (
    <Input
      type="search"
      placeholder="Search"
      value={value}
      onChange={(event) => {
        console.log(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
}
