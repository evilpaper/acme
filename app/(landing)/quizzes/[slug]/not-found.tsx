import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen mt-12 flex flex-col items-center gap-6">
      <p className="text-lg text-center">
        Looks like you have not selected a quiz. Or the quiz you are looking for
        has moved. 2
      </p>
      <Button asChild>
        <Link href="/quizzes" className="flex h-11 w-fit gap-2 rounded-md px-8">
          Back to Quizzes
        </Link>
      </Button>
    </div>
  );
}
