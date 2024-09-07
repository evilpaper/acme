import Quiz from '@/components/quiz/quiz';
import { questions } from '@/content/questions';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (id === 'mdn-quiz') {
    return <Quiz questions={questions} />;
  }

  return <Quiz questions={questions} />;
}
