// import { sql } from "@vercel/postgres";
// import { Quiz, Question, QuestionChoice, QuestionWithOptions } from "./types";

import { Deck } from "./types";

// export async function getQuizzes() {
//   try {
//     const data = await sql<Quiz>`
//         SELECT
//           id,
//           name,
//           slug,
//           description
//         FROM quizzes
//         ORDER BY name ASC
//       `;
//     const quizzes = data.rows;
//     return quizzes;
//   } catch (err) {
//     console.error("Database Error: ", err);
//     throw new Error("Failed to fetch quizzes.");
//   }
// }

// export async function getQuizBySlug(slug: string) {
//   try {
//     const quizData = await sql<Quiz>`
//           SELECT
//           id,
//           name,
//           slug,
//           description
//         FROM quizzes
//         WHERE slug=${slug}
//       `;
//     return quizData.rows;
//   } catch (error) {
//     console.log("Database error: ", error);
//     throw new Error("Failed to fetch quiz by slug.");
//   }
// }

// export async function getQuestionsByQuizId(
//   quiz_id: string,
// ): Promise<QuestionWithOptions[]> {
//   try {
//     const result = await sql<Question & { choice_text: string | null }>`
//       SELECT
//         q.id,
//         q.quiz_id,
//         q.question,
//         q.correctanswer,
//         q.explanation,
//         q.source,
//         qc.text as choice_text
//       FROM questions q
//       LEFT JOIN question_choices qc ON q.id = qc.question_id
//       WHERE q.quiz_id = ${quiz_id}
//       ORDER BY q.id, qc.id
//     `;

//     // Create an array to store questions in order
//     const orderedQuestions: QuestionWithOptions[] = [];
//     // Use a Map to track which questions we've seen
//     const questionsMap = new Map<string, QuestionWithOptions>();

//     // Process rows in order (they come ordered from the database)
//     result.rows.forEach((row) => {
//       const { choice_text, ...question } = row;

//       if (!questionsMap.has(question.id)) {
//         // If we haven't seen this question before:
//         // Create new question object
//         const newQuestion = {
//           ...question, // Spread all question properties (id, quiz_id, question, correctanswer, etc.)
//           options: choice_text ? [choice_text] : [], // Initialize options array with first choice if it exists
//         };
//         // Add to both the map and the ordered array
//         questionsMap.set(question.id, newQuestion);
//         orderedQuestions.push(newQuestion);
//       } else if (choice_text) {
//         // If we've seen this question before and there's a choice_text:
//         // Add choice to existing question
//         questionsMap.get(question.id)!.options.push(choice_text);
//       }
//     });

//     return orderedQuestions;
//   } catch (error) {
//     console.log("Database error: ", error);
//     throw new Error("Failed to fetch questions by quiz id.");
//   }
// }

export const decks: Deck[] = [
  {
    id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    name: "A Tour of Go",
    slug: "a-tour-of-go-chapter-1",
    description: "Chapter 1 - Packages, variables and functions",
    cards: [
      {
        id: 1,
        prompt: "What must every Go program start with?",
        answer: "package main",
      },
      {
        id: 2,
        prompt: "How do you import a package in Go?",
        answer: 'import "fmt"',
      },
      {
        id: 3,
        prompt: 'What does fmt.Println("Hi") do?',
        answer: 'Prints "Hi" to standard output',
      },
      {
        id: 4,
        prompt: "How do you define a function in Go?",
        answer: "func name(params) returnType { ... }",
      },
      {
        id: 5,
        prompt: "Can Go functions return multiple values?",
        answer: "Yes, with comma-separated return values",
      },
      {
        id: 6,
        prompt: "What is the zero value of an int?",
        answer: "0",
      },
      {
        id: 7,
        prompt: "What keyword declares a variable?",
        answer: "var",
      },
      {
        id: 8,
        prompt: "How do you declare and initialize a variable?",
        answer: "var x = 3 or x := 3",
      },
      {
        id: 9,
        prompt: "Where can variables be declared?",
        answer: "Inside or outside functions",
      },
      {
        id: 10,
        prompt: "How are exported names written in Go?",
        answer: "Start with a capital letter",
      },
    ],
  },
];
