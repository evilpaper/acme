import { fraunces } from '@/app/ui/fonts';
import { Search } from '@/components/search';
import { Input } from '@/components/ui/input';

export default function Invoices() {
  return (
    <main className="flex min-h-screen flex-col space-y-6">
      <h1
        className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
      <section>
        <Search />
      </section>
    </main>
  );
}