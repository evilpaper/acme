import { QuestionWithOptions } from "@/features/quizzes/data/types";

/**
 * Randomizes an array of questions using Fisher-Yates shuffle algorithm
 * Returns a new array, leaving the original unchanged
 */
export function randomizeQuestions(
  questions: QuestionWithOptions[],
): QuestionWithOptions[] {
  // Create a copy of the array to avoid mutating the original
  const shuffled = [...questions];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}
