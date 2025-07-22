import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  front: string;
  deckName: string;
  deckLength: number;
  deckSuite: string;
}

export function CardFront({
  id,
  front,
  deckName,
  deckLength,
  deckSuite,
}: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden rounded-2xl border-2 border-primary">
      <CardHeader className="absolute w-full">
        <CardTitle className="flex justify-between">
          <p className="text-base">{id}</p>
          <p className="text-base">{deckLength}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-start mt-16">
        <p className="text-2xl font-bold tracking-tight leading-[1.8rem]">
          {front}
        </p>
      </CardContent>
    </Card>
  );
}
