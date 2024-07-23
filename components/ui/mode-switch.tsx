'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Icons } from '@/components/ui/icons';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ModeSwitch() {
  const { setTheme } = useTheme();

  return (
    <Tabs defaultValue="light">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="system" onClick={() => setTheme('system')}>
          <Icons.system className="h-[1rem] w-[1rem]" />
        </TabsTrigger>
        <TabsTrigger value="light" onClick={() => setTheme('light')}>
          <Icons.sun className="h-[1rem] w-[1rem]" />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
          <Icons.moon className="h-[1rem] w-[1rem]" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
