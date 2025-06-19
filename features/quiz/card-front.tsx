import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  question: any;
  handleAnswer: (option: string) => void;
}

export function CardFront({ question, handleAnswer }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute backface-hidden">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end space-y-2">
        {question.options.map((option: any, index: any) => (
          <Button
            key={index}
            variant="outline"
            className="text-balance h-auto w-full justify-start text-left"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
