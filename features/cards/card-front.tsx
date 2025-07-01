import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
}

export function CardFront({ id }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden rounded-2xl">
      <CardHeader>
        <CardTitle className="font-semibold line-clamp-3 text-base"></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 justify-center items-center">
        <p>{id}</p>
        <p>Front</p>
      </CardContent>
    </Card>
  );
}
