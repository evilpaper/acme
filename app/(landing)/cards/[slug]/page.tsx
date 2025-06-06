import NotFound from "./not-found";
import { Quiz } from "@/features/quiz/quiz";
import { randomizeQuestions } from "@/features/quiz/randomize-questions";
import { getQuestionsByQuizId, getQuizBySlug } from "@/features/quiz/data/data";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const quiz = await getQuizBySlug(slug);

  if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
    return <NotFound />;
  }

  const currentQuiz = quiz[0];
  const questions = await getQuestionsByQuizId(currentQuiz.id);

  const randomizedQuestions = randomizeQuestions(questions);

  if (!questions || questions.length === 0) {
    return <NotFound />;
  }

  return (
    <Quiz quiz={{ name: currentQuiz.name, questions: randomizedQuestions }} />
  );
}
