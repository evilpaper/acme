'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { questions } from '@/components/quiz/questions';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    console.log('Running handleAnswer');
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (!questions) {
    return null;
  }

  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-6">
      {!showResult ? (
        <>
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} />
          <h2 className="text-xl font-semibold">
            {questions[currentQuestion].question}
          </h2>
          <div className="w-full space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? 'default' : 'outline'}
                className="w-full justify-start text-left"
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </Button>
            ))}
          </div>
          {isAnswered && (
            <div className="flex w-full rounded-md border border-stone-400 p-4">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                <p>
                  Correct! <br /> {questions[currentQuestion].explanation}
                </p>
              ) : (
                <p>
                  Incorrect! <br /> The correct answer is:{' '}
                  {questions[currentQuestion].correctAnswer} <br />
                  {questions[currentQuestion].explanation}
                </p>
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
          <Button onClick={handleNext}>
            {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
          </Button>
        )
      ) : (
        <Button onClick={resetQuiz}>Restart Quiz</Button>
      )}
    </div>
  );
}
