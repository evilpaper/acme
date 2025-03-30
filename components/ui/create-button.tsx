"use-client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useFormStatus } from "react-dom";

export function CreateButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <Button>
      {pending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
}
