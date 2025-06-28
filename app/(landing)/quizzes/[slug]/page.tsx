import NotFound from "./not-found";
import { randomizeQuestions } from "@/features/quizzes/randomize-questions";
import {
  getQuestionsByQuizId,
  getQuizBySlug,
} from "@/features/quizzes/data/data";
import QuizScreen from "@/features/quizzes/quiz-screen";

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
    <QuizScreen
      quiz={{ name: currentQuiz.name, questions: randomizedQuestions }}
    />
  );
}
