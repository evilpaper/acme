import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
  rotation: number;
}

export function CardBack({ card }: { card: Props }) {
  return (
    <Card className="w-full h-full flex flex-col absolute">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3"></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 justify-center items-center">
        <p>{card.id}</p>
        <p>Back</p>
      </CardContent>
    </Card>
  );
}
