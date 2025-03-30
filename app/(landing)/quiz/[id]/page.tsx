import Quiz from "@/components/quiz/quiz";
import { javascriptQuestions } from "@/content/javascriptQuestions";
import { shuffle } from "@/lib/utils";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const shuffled = shuffle(javascriptQuestions);

  if (id === "javascript") {
    return <Quiz questions={shuffled} />;
  }

  return <Quiz questions={javascriptQuestions} />;
}
