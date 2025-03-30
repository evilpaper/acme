import Link from "next/link";
import { cn } from "@/lib/utils";
import SignupForm from "@/components/ui/signup-form";
import { Icons } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";

export default function SigninPage() {
  return (
    <main className="flex h-screen justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="relative mx-auto mt-24 flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <SignupForm />
      </div>
    </main>
  );
}
