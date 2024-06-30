'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

/**
 * Set whatever is entered as a url param called (key) query.
 * Intented to be picked up by component that handle data fetching.
 */

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = React.useCallback(
    (term: string) => {
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
