import { shuffle } from "@/lib/utils";
import Quiz from "@/features/quiz/quiz";
import { lydiaHallieQuestions } from "@/content/lydiaHallie";
import { QuizNotFound } from "@/features/quiz/quiz-not-found";
import { javascriptQuestions } from "@/content/javascriptQuestions";
import { getQuestionsByQuizId } from "@/features/quiz/quiz-data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const questions = await getQuestionsByQuizId(id);
  // console.log("questions: ", questions);

  if (id === "javascript-101") {
    const quiz = {
      ...javascriptQuestions,
      questions: shuffle(javascriptQuestions.questions),
    };
    return <Quiz quiz={quiz} />;
  }

  if (id === "lydia-hallies-javascript-questions") {
    const quiz = {
      ...lydiaHallieQuestions,
      questions: shuffle(lydiaHallieQuestions.questions),
    };
    return <Quiz quiz={quiz} />;
  }

  return <QuizNotFound />;
}
