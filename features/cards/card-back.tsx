import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardBack() {
  return (
    <Card className="w-full h-full flex flex-col absolute">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3"></CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex justify-center items-center">
        Back
      </CardContent>
    </Card>
  );
}
