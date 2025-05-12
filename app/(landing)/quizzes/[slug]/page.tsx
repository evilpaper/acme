import {
  getQuestionsByQuizId,
  getQuizBySlug,
} from "@/features/quiz/data/repository";
import Quiz from "@/features/quiz/quiz-screen";
import { QuizNotFound } from "@/features/quiz/not-found";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const quiz = await getQuizBySlug(slug);

  // TODO: This is a bit ugly. Fix later.
  const questions =
    Array.isArray(quiz) && quiz[0]?.id
      ? await getQuestionsByQuizId(quiz[0].id)
      : undefined;

  if (questions) {
    return <Quiz quiz={{ name: quiz[0].name, questions: questions }} />;
  }

  return <QuizNotFound />;
}
