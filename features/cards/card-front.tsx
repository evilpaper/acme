import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  front: string;
  deckName: string;
}

export function CardFront({ front, deckName }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden rounded-2xl border-2 border-primary/60">
      <CardHeader className="absolute">
        <CardTitle>
          <p className="text-xs text-primary/80">{deckName}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-start mt-16">
        <p className="text-2xl font-bold tracking-tighter">{front}</p>
      </CardContent>
    </Card>
  );
}
