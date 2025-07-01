import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: string;
}

export function CardBack({ id }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute bg-primary text-primary-foreground rounded-2xl border-2 border-secondary/50">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3">
          <p className="text-4xl font-bold tracking-tighter">{id}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center pt-20">
        <p className="text-4xl font-bold tracking-tighter">Back</p>
      </CardContent>
    </Card>
  );
}
