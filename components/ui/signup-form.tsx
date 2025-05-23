"use client";

import Link from "next/link";
import Image from "next/image";
import { register } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import logo from "../../public/images/logo-black-lemon.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icons } from "./icons";
import { TransitionLink } from "@/common/components/transitionLink";

export default function SignupForm() {
  /**
   * useFormState is a Hook that allows you to update state based on the result of a form action.
   *
   * It takes an existing form action function as well as an initial state,
   * and it returns a new action that you use in your form, along with the latest form state.
   *
   * The latest form state is also passed to the function that you provided.
   *
   * register try to add the new user to database and return an error message if it doesn't work.
   */
  const [errorMessage, dispatch] = useFormState(register, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex flex-1 flex-col space-y-2 rounded-lg px-6 pb-4 pt-8 text-center">
        <div className="mb-4 grid items-center gap-4 text-center">
          <Link href="/" className="flex justify-center">
            <Image
              priority
              src={logo}
              alt="ACME Fresh Produce Logo"
              height="48"
            />
          </Link>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Welcome
          </h1>
          <p>Create your account.</p>
        </div>
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
            placeholder="Enter a password"
            required
            minLength={6}
          />
          <SignupButton />
        </section>
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
        <p className="text-gray-700">
          Already have an account?
          <TransitionLink
            href="/login"
            className="h-11 rounded-md px-2 underline"
          >
            <span>Login</span>
          </TransitionLink>
        </p>
      </div>
    </form>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();
  return (
    <Button aria-disabled={pending} className="mt-4">
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      Sign up with email
    </Button>
  );
}
