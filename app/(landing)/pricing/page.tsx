import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export const metadata = {
  title: "Pricing",
};

export default function Page() {
  return (
    <section className="container flex flex-col gap-6 px-0 md:max-w-[64rem] md:py-12 ">
      <div className="flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2
          className={`align-center mt-8 max-w-screen-md text-5xl font-bold leading-tight tracking-tighter md:text-6xl`}
        >
          Simple, transparent pricing
        </h2>
        <p className="align-center text-lg leading-normal text-muted-foreground sm:leading-7 md:max-w-[85%]">
          Unlock all features including unlimited invoices for your business.
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">
            What&apos;s included in the PRO plan
          </h3>
          <ul className="grid gap-3 text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Invoices
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Unlimited Customers
            </li>

            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Custom domain
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Dashboard Analytics
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Access to Discord
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> Premium Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">$19</h4>
            <p className="font-medium text-muted-foreground">Billed Monthly</p>
          </div>
          <Link href="/signup" className={cn(buttonVariants({ size: "lg" }))}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="text-center leading-normal text-foreground sm:leading-7">
          ACME is a demo app. <br className="md:hidden" />
          <strong>You can test the upgrade and won&apos;t be charged.</strong>
        </p>
      </div>
    </section>
  );
}
