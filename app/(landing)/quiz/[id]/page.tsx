import Quiz from '@/components/quiz/quiz';

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <Quiz />;
}
