import Quiz from "@/components/quiz/quiz";
import { javascriptQuestions } from "@/content/javascriptQuestions";
import { shuffle } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  // if (id === "javascript") {
  //   return <Quiz quiz={javascriptQuestions} />;
  // }

  const quiz = {
    ...javascriptQuestions,
    questions: shuffle(javascriptQuestions.questions),
  };

  return <Quiz quiz={quiz} />;
}
