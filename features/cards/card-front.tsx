import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
}

export function CardFront({ id }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden rounded-2xl border-2 border-primary/60">
      <CardHeader>
        <CardTitle className="font-semibold line-clamp-3 text-base">
          <p className="text-4xl font-bold tracking-tighter">{id}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center pt-20">
        <p className="text-4xl font-bold tracking-tighter">Front</p>
      </CardContent>
    </Card>
  );
}
