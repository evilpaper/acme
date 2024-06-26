import { Skeleton } from '@/components/ui/skeleton';

export function BigNumberCardsSkeleton() {
  return (
    <>
      <Skeleton className="h-[140px] w-full rounded-lg" />
      <Skeleton className="h-[140px] w-full rounded-lg" />
      <Skeleton className="h-[140px] w-full rounded-lg" />
      <Skeleton className="h-[140px] w-full rounded-lg" />
    </>
  );
}
