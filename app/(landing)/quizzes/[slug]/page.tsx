import Quiz from "@/features/quiz/quiz";
import { QuizNotFound } from "@/features/quiz/quiz-not-found";
import { getQuestionsByQuizId, getQuizBySlug } from "@/features/quiz/quiz-data";

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
