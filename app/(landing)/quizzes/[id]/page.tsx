import { shuffle } from "@/lib/utils";
import Quiz from "@/features/quiz/quiz";
import { QuizNotFound } from "@/features/quiz/quiz-not-found";
import { getQuestionsByQuizId } from "@/features/quiz/quiz-data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const questions = await getQuestionsByQuizId(id);

  if (questions) {
    return <Quiz quiz={{ name: id, questions: questions }} />;
  }

  return <QuizNotFound />;
}
