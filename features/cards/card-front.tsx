import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  term: string;
}

export function CardFront({ id, term }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden rounded-2xl border-2 border-primary/60">
      <CardHeader className="absolute">
        <CardTitle className="font-semibold line-clamp-3 text-base">
          <p className="text-xl font-bold tracking-tighter">{id}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        <p className="text-3xl font-bold tracking-tighter">{term}</p>
      </CardContent>
    </Card>
  );
}
