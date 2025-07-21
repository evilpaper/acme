import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  back: string;
  deckName: string;
  deckLength: number;
  deckSuite: string;
}

export function CardBack({ id, back, deckName, deckLength, deckSuite }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute bg-primary text-primary-foreground rounded-2xl border-2 border-secondary/50">
      <CardHeader className="absolute w-full">
        <CardTitle className="flex justify-between">
          <p className="text-xs font-light tracking-normal">{deckName}</p>
          <p className="text-xs font-light">{`${id}`}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-start mt-16">
        <p className="text-2xl font-bold tracking-tighter leading-[1.8rem]">
          {back}
        </p>
      </CardContent>
    </Card>
  );
}
