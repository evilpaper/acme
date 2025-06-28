import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardFront() {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden">
      <CardHeader>
        <CardTitle className="font-semibold line-clamp-3 text-base"></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        Front
      </CardContent>
    </Card>
  );
}
