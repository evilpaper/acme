"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CardFront } from "./card-front";
import { QuestionWithOptions } from "./data/types";
import { CardBack } from "./card-back";
import { motion } from "motion/react";

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

export function CardQuiz({ quiz }: { quiz: Quiz }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const { name, questions } = quiz;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswered(true);
    setFlipped(!flipped);
    if (answer === questions[currentQuestion].correctanswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setFlipped(false);
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
          <div className="perspective grid place-items-center w-[min(100%,320px)] aspect-[5/7]">
            <motion.div
              className="relative w-full h-full preserve-3d"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CardFront
                question={questions[currentQuestion] as QuestionWithOptions}
                selectedAnswer={selectedAnswer}
                handleAnswer={handleAnswer}
                isAnswered={isAnswered}
              />
              <CardBack
                selectedAnswer={selectedAnswer}
                correctanswer={questions[currentQuestion].correctanswer}
                explanation={questions[currentQuestion].explanation}
                source={questions[currentQuestion].source}
              />
            </motion.div>
          </div>
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
