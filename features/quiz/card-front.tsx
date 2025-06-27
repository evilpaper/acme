import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardData } from "./data/types";

interface Props {
  question: CardData;
  handleAnswer: (option: string) => void;
}

export function CardFront({ question, handleAnswer }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute overflow-hidden">
      <CardHeader>
        <CardTitle className="font-semibold line-clamp-3 text-base">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end space-y-5 p-5">
        {question.options.map((option: string) => (
          <Button
            key={option}
            variant="outline"
            className="
              first-letter:text-balance h-auto w-full justify-start text-left 
              whitespace-normal break-words
              text-sm sm:text-base"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
