'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/ui/icons';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authenticate } from '@/app/lib/actions';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFormState, useFormStatus } from 'react-dom';
import logo from '../../public/images/logo-black-lemon.svg';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex flex-1 flex-col space-y-2 rounded-lg px-6 pb-4 pt-8 text-center">
        <div className="mb-2 grid items-center gap-4 text-center">
          <Link href="/" className="flex justify-center">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            Welcome back
          </h1>
          <Tabs defaultValue="email">
            <TabsList>
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="bankid">BankID</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <section className="mt-4 grid items-center gap-4 text-center">
                <Label className="sr-only" htmlFor="password">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <LoginButton />
              </section>
            </TabsContent>
            <TabsContent value="bankid" className="grid items-center gap-8 p-8">
              <p>...coming soon</p>
            </TabsContent>
          </Tabs>
        </div>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} className="mt-4">
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      Login with email
    </Button>
  );
}
