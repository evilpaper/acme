import { Skeleton } from '@/components/ui/skeleton';

export function LatestInvoicesSkeleton() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="ml-4 mr-4 flex-1 space-y-1">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex items-center">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="ml-4 mr-4 flex-1 space-y-1">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex items-center">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="ml-4 mr-4 flex-1 space-y-1">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex items-center">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="ml-4 mr-4 flex-1 space-y-1">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
      <div className="flex items-center">
        <Skeleton className="h-9 w-9 rounded-full" />
        <div className="ml-4 mr-4 flex-1 space-y-1">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  );
}
