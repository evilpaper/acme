import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CardData } from "./data/types";

interface Props {
  question: CardData;
  handleAnswer: (option: string) => void;
}

export function CardFront({ question, handleAnswer }: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end space-y-2">
        {question.options.map((option: string) => (
          <Button
            key={option}
            variant="outline"
            className="
              first-letter:text-balance h-auto w-full justify-start text-left 
              whitespace-normal break-words
              overflow-hidden
              text-ellipsis
              text-base sm:text-lg
              text-[clamp(0.75rem,2vw,1rem)]"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
