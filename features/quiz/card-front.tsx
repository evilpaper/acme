import { Button } from "@/components/ui/button";
import { QuestionWithOptions } from "./data/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CardFront({
  question,
  handleAnswer,
}: {
  question: any;
  handleAnswer: (option: string) => void;
}) {
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
            // variant={
            //   selectedAnswer === option
            //     ? option === question.correctanswer
            //       ? "success"
            //       : "fail"
            //     : selectedAnswer !== option &&
            //         selectedAnswer.length > 1 &&
            //         option === question.correctanswer
            //       ? "correct"
            //       : "outline"
            // }
            variant="outline"
            className="text-balance h-auto w-full justify-start text-left"
            onClick={() => handleAnswer(option)}
            // disabled={isAnswered}
          >
            {option}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
