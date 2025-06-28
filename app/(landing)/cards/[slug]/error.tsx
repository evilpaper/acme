"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen mt-12 flex flex-col items-center gap-6">
      <p className="text-lg text-center">
        This didn&apos;t work as expected. One reason could be the card you are
        looking for has moved.
      </p>
      <div className="flex flex-col items-center gap-4 w-[200px]">
        {" "}
        {/* Added container with fixed width */}
        <Button asChild variant="outline">
          <Link
            href="/cards"
            className="flex h-11 w-full gap-2 rounded-md px-8"
          >
            Back to cards
          </Link>
        </Button>
        <Button
          className="flex h-11 w-full gap-2 rounded-md px-8"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
