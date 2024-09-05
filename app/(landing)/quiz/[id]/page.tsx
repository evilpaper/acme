import Quiz from '@/components/quiz/quiz';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  if (id === 'mdn-quiz') {
    return <Quiz />;
  }

  return <Quiz />;
}
