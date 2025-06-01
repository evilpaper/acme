"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Question = {
  question: string;
  options: string[];
  correctanswer: string;
  explanation: string;
  source?: string;
};

type Quiz = {
  name: string;
  questions: Question[];
};

export default function Quiz({ quiz }: { quiz: Quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const { name, questions } = quiz;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQuestion].correctanswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  return (
    <div className="w-[min(100%,448px)] mx-auto flex flex-col items-center justify-center gap-6">
      {!showResult ? (
        <>
          <div className="text-sm text-muted-foreground">
            {name} | Question {currentQuestion + 1} of {questions.length}
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} />
          <h2 className="text-xl font-semibold">
            {questions[currentQuestion].question}
          </h2>
          <div className="w-full space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === option
                    ? option === questions[currentQuestion].correctanswer
                      ? "success"
                      : "fail"
                    : selectedAnswer !== option &&
                        selectedAnswer.length > 1 &&
                        option === questions[currentQuestion].correctanswer
                      ? "correct"
                      : "outline"
                }
                className="text-balance h-auto w-full justify-start text-left"
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </Button>
            ))}
          </div>
          {isAnswered && (
            <div className="flex flex-col w-full  rounded-md border border-stone-400 p-4">
              {selectedAnswer === questions[currentQuestion].correctanswer ? (
                <>
                  <p className="text-[hsl(var(--success))] font-semibold mb-2">
                    Correct!
                  </p>
                  <p>{questions[currentQuestion].explanation}</p>
                </>
              ) : (
                <>
                  <p className="text-[hsl(var(--fail))] font-semibold mb-2">
                    Incorrect!
                  </p>
                  <p>
                    The correct answer is:{" "}
                    {questions[currentQuestion].correctanswer} <br />
                    {questions[currentQuestion].explanation}
                  </p>
                </>
              )}
              {questions[currentQuestion].source && (
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  className="text-sm mt-2"
                >
                  Source: {questions[currentQuestion].source}
                </a>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-semibold">Quiz Completed!</h2>
          <p className="text-xl">
            Your score: {score} out of {questions.length}
          </p>
        </div>
      )}

      {!showResult ? (
        isAnswered && (
          <Button onClick={handleNext} className="w-full">
            {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
          </Button>
        )
      ) : (
        <Button onClick={resetQuiz} className="w-full">
          Restart Quiz
        </Button>
      )}
    </div>
  );
}
