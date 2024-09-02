import Quiz from '@/components/quiz/quiz';

export default function Page() {
  return (
    <section className="width-full height-full mt-10 pb-8 pt-8">
      <h1
        className={`text-center text-5xl font-bold leading-tight tracking-tighter md:text-6xl`}
      >
        Quiz for devs
      </h1>
      <Quiz />
    </section>
  );
}
