import { getQuizzes } from "@/features/quiz/data/data";
import { QuizzesScreen } from "@/features/quiz/quizzes-screen";

export default async function Page() {
  const quizzes = await getQuizzes();
  return <QuizzesScreen quizzes={quizzes} />;
}
