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
  id: string;
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
  const [answeredCards, setAnsweredCards] = useState<Record<string, boolean>>(
    {},
  );

  const { name, questions } = quiz;

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnsweredCards((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: true,
    }));
    if (answer === questions[currentQuestion].correctanswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
    setAnsweredCards({});
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
            {questions.map((question, index) => {
              const randomRotation = ((index * 6) % 10) - 5;
              // Calculate if this card is the current one
              const isCurrentCard = index === currentQuestion;
              // Calculate z-index based on position relative to current card
              const zIndex =
                questions.length - Math.abs(index - currentQuestion);
              return (
                <motion.div
                  key={question.id}
                  className="w-full h-full preserve-3d"
                  animate={{
                    rotateY: answeredCards[question.id] ? 180 : 0,
                    rotateZ: randomRotation,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  style={{
                    gridRow: 1,
                    gridColumn: 1,
                    zIndex,
                    pointerEvents: isCurrentCard ? "auto" : "none", // Only current card is interactive
                  }}
                >
                  <CardFront
                    question={question as QuestionWithOptions}
                    selectedAnswer={selectedAnswer}
                    handleAnswer={handleAnswer}
                    isAnswered={answeredCards[question.id] || false}
                  />
                  <CardBack
                    selectedAnswer={selectedAnswer}
                    correctanswer={question.correctanswer}
                    explanation={question.explanation}
                    source={question.source}
                  />
                </motion.div>
              );
            })}
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
        <Button onClick={handleNext} className="w-full">
          {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
        </Button>
      ) : (
        <Button onClick={resetQuiz} className="w-full">
          Restart Quiz
        </Button>
      )}
    </div>
  );
}
