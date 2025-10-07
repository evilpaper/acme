export default function HomePage() {
  return (
    <div className="flex flex-col space-y-6">
      <div className="container px-2">
        <main className="flex w-full flex-1 flex-col gap-6">
          <section>
            <h1
              className={`font-heading text-3xl font-bold leading-tight md:text-4xl`}
            >
              Dashboard
            </h1>
          </section>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <p>...stuff was here before</p>
          </section>
        </main>
      </div>
    </div>
  );
}
