'use client';

import Link from 'next/link';
import Image from 'next/image';
import { fraunces } from '@/app/ui/fonts';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { authenticate } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import logo from '../../public/images/logo-black-lemon.svg';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex flex-1 flex-col space-y-2 rounded-lg px-6 pb-4 pt-8 text-center">
        <div className="mb-2 grid items-center gap-2 text-center">
          <Link href="/" className="flex justify-center">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <h1
            className={`text-4xl font-bold leading-tight tracking-tight ${fraunces.className}`}
          >
            Welcome back
          </h1>
          <p className={'text'}>Enter your email to login to your account.</p>
        </div>
        <div className="grid gap-2">
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
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
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
    <Button aria-disabled={pending}>
      {pending && <span>Checking... </span>}
      Login with email
    </Button>
  );
}
