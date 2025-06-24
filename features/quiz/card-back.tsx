import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  selectedAnswer: string;
  correctanswer: string;
  explanation: string;
  source?: string;
}

export function CardBack({
  selectedAnswer,
  correctanswer,
  explanation,
  source,
}: Props) {
  return (
    <Card className="w-full h-full flex flex-col absolute">
      <CardHeader className="flex-none">
        <CardTitle className="text-lg font-semibold line-clamp-3">
          {selectedAnswer === correctanswer ? (
            <>
              <p className="text-[hsl(var(--success))] font-semibold mb-2">
                Correct!
              </p>
            </>
          ) : (
            <>
              <p className="text-[hsl(var(--fail))] font-semibold mb-2">
                Incorrect!
              </p>
            </>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-end space-y-2">
        <p>
          The correct answer is: {correctanswer} <br />
          {explanation}
        </p>
        {source && (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            className="text-sm mt-2"
          >
            Source: {source}
          </a>
        )}
      </CardContent>
    </Card>
  );
}
