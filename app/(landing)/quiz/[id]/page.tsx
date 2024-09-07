import Quiz from '@/components/quiz/quiz';
import { javascriptQuestions } from '@/content/javascriptQuestions';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (id === 'javascript') {
    return <Quiz questions={javascriptQuestions} />;
  }

  return <Quiz questions={javascriptQuestions} />;
}
