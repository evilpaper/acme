import { getQuestionsByQuizId, getQuizBySlug } from "@/features/quiz/data/data";
import Quiz from "@/features/quiz/quiz-screen";
import { QuizNotFound } from "@/features/quiz/not-found";

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;
    const quiz = await getQuizBySlug(slug);

    if (!quiz || !Array.isArray(quiz) || quiz.length === 0) {
      return <QuizNotFound />;
    }

    const currentQuiz = quiz[0];
    const questions = await getQuestionsByQuizId(currentQuiz.id);

    if (!questions || questions.length === 0) {
      return <QuizNotFound />;
    }

    return <Quiz quiz={{ name: currentQuiz.name, questions: questions }} />;
  } catch (error) {
    // Log error for monitoring
    console.error(`Error loading quiz ${params.slug}:`, error);
    return <QuizNotFound />;
  }
}
