import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  back: string;
  deckName: string;
}

export function CardBack({ id, back, deckName }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute bg-primary text-primary-foreground rounded-2xl border-2 border-secondary/50">
      <CardHeader className="absolute">
        <CardTitle>
          <p className="text-xs text-primary-foreground/80">{deckName}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        <p className="text-2xl font-bold tracking-tighter">{back}</p>
      </CardContent>
    </Card>
  );
}
