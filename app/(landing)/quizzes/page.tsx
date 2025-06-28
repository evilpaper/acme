import { getQuizzes } from "@/features/quizzes/data/data";
import { QuizzesScreen } from "@/features/quizzes/quizzes-screen";

export const metadata = {
  title: "Quizzes | ACME",
  description:
    "Improve your knowledge with ACME's quizzes - Engage with our comprehensive collection of quizzes designed to enhance your learning experience.",
  keywords:
    "ACME quizzes, interactive quizzes, knowledge testing, educational quizzes, learning assessment",
  openGraph: {
    title: "Quizzes | ACME",
    description:
      "Solidify your knowledge with ACME's interactive quizzes - Engage with our comprehensive collection of quizzes designed to enhance your learning experience.",
    type: "website",
  },
};

export default async function Page() {
  const quizzes = await getQuizzes();
  return <QuizzesScreen quizzes={quizzes} />;
}
