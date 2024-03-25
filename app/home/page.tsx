import { MainNav } from '@/components/ui/main-nav';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <MainNav />
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <p>I am aside</p>
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          <p>I am home</p>
        </main>
      </div>
    </div>
  );
}
