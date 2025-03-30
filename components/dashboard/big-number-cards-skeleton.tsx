import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function BigNumberCardsSkeleton() {
  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            <Skeleton className="h-[1.5rem] rounded-lg" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[1.5rem] rounded-lg" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            <Skeleton className="h-[1.5rem] rounded-lg" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[1.5rem] rounded-lg" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            <Skeleton className="h-[1.5rem] rounded-lg" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[1.5rem] rounded-lg" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>
            <Skeleton className="h-[1.5rem] rounded-lg" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-[1.5rem] rounded-lg" />
        </CardContent>
      </Card>
    </>
  );
}
