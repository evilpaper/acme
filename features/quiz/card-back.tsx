export function CardBack({
  selectedAnswer,
  correctanswer,
  explanation,
  source,
}: {
  selectedAnswer: string;
  correctanswer: string;
  explanation: string;
  source?: string;
}) {
  return (
    <div className="flex flex-col w-full  rounded-md border border-stone-400 p-4">
      {selectedAnswer === correctanswer ? (
        <>
          <p className="text-[hsl(var(--success))] font-semibold mb-2">
            Correct!
          </p>
          <p>{explanation}</p>
        </>
      ) : (
        <>
          <p className="text-[hsl(var(--fail))] font-semibold mb-2">
            Incorrect!
          </p>
          <p>
            The correct answer is: {correctanswer} <br />
            {explanation}
          </p>
        </>
      )}
      {source && (
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className="text-sm mt-2"
        >
          Source: {source}
        </a>
      )}
    </div>
  );
}
