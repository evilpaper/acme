import LoginForm from '@/app/ui/login-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="bg-sand flex h-screen items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4 md:left-8 md:top-8',
        )}
      >
        <>
          {/* <Icons.chevronLeft className="mr-2 h-4 w-4" /> */}
          <ArrowLeftIcon className="pointer-events-none mr-2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900" />
          Back
        </>
      </Link>
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}
