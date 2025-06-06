import NotFound from "./not-found";
import { CardQuiz } from "@/features/quiz/card-quiz";
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
    <CardQuiz
      quiz={{ name: currentQuiz.name, questions: randomizedQuestions }}
    />
  );
}
