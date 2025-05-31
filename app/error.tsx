"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to your error tracking service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
          <h1 className="text-2xl font-semibold text-center">
            Something went wrong
          </h1>
          <p className="text-lg text-center text-muted-foreground">
            We&apos;re sorry, but something unexpected happened.
          </p>
          <div className="flex flex-col items-center gap-4 w-[200px]">
            <Button asChild variant="outline">
              <Link
                href="/"
                className="flex h-11 w-full items-center justify-center"
              >
                Go to Home
              </Link>
            </Button>
            <Button className="w-full h-11" onClick={() => reset()}>
              Try again
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
