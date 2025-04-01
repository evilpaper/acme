import Quiz from "@/components/quiz/quiz";
import { Button } from "@/components/ui/button";
import { javascriptQuestions } from "@/content/javascriptQuestions";
import { shuffle } from "@/lib/utils";
import Link from "next/link";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (id === "javascript") {
    const quiz = {
      ...javascriptQuestions,
      questions: shuffle(javascriptQuestions.questions),
    };
    return <Quiz quiz={quiz} />;
  }

  return (
    <div className="min-h-screen mt-12 flex flex-col items-center gap-6">
      <p className="text-lg text-center">
        Looks like you haven't selected a quiz. Or the quiz you are looking for
        has moved.
      </p>
      <Button asChild>
        <Link href="/quiz" className="flex h-11 w-fit gap-2 rounded-md px-8">
          Back to Quizzes
        </Link>
      </Button>
    </div>
  );
}
