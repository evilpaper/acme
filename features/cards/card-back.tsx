import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
}

export function CardBack({ id }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute bg-primary text-primary-foreground">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3"></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4 justify-center items-center">
        <p>{id}</p>
        <p>Back</p>
      </CardContent>
    </Card>
  );
}
