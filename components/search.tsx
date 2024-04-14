'use client';

import React from 'react';
import { Input } from './ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function Search() {
  const [value, setValue] = React.useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = React.useCallback(
    (term: string) => {
      console.log(term);
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
    },
    [pathname, replace, searchParams],
  );

  return (
    <Input
      type="search"
      placeholder="Search"
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}
