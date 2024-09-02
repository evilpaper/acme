'use client';

import { Fraunces } from 'next/font/google';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const fraunces = Fraunces({ subsets: ['latin'] });

const questions = [
  {
    question: 'What does JSX stand for?',
    options: [
      'JavaScript XML',
      'Java Syntax Extension',
      'JSON XML',
      'JavaScript Syntax eXtension',
    ],
    correctAnswer: 'JavaScript XML',
  },
  {
    question: 'Which hook is used for side effects in React?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 'useEffect',
  },
  {
    question: "What is the purpose of 'use client' in Next.js 13?",
    options: [
      'To indicate a component should be rendered on the client',
      'To optimize the component for mobile devices',
      'To enable server-side rendering',
      'To add TypeScript support',
    ],
    correctAnswer: 'To indicate a component should be rendered on the client',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6">
          {!showResult ? (
            <>
              <div className="mb-4 text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <Progress
                value={((currentQuestion + 1) / questions.length) * 100}
                className="mb-6"
              />
              <h2 className="mb-4 text-xl font-semibold">
                {questions[currentQuestion].question}
              </h2>
              <RadioGroup
                value={selectedAnswer}
                onValueChange={setSelectedAnswer}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="mb-2 flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </>
          ) : (
            <div className="text-center">
              <h2 className="mb-4 text-2xl font-semibold">Quiz Completed!</h2>
              <p className="text-xl">
                Your score: {score} out of {questions.length}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          {!showResult ? (
            <Button onClick={handleSubmit} disabled={!selectedAnswer}>
              {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
            </Button>
          ) : (
            <Button onClick={resetQuiz}>Restart Quiz</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
