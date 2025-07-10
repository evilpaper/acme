import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
  definition: string;
}

export function CardBack({ id, definition }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute bg-primary text-primary-foreground rounded-2xl border-2 border-secondary/50">
      <CardHeader className="absolute">
        <CardTitle className="text-lg font-semibold line-clamp-3">
          <p className="text-xl font-bold tracking-tighter">{id}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        <p className="text-3xl font-bold tracking-tighter">{definition}</p>
      </CardContent>
    </Card>
  );
}
