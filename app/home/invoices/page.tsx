import { fraunces } from '@/app/ui/fonts';

export default function Invoices() {
  return (
    <main className="flex min-h-screen flex-col space-y-6">
      <h1
        className={`font-heading ${fraunces.className} text-3xl font-bold leading-tight md:text-4xl`}
      >
        Invoices
      </h1>
    </main>
  );
}
