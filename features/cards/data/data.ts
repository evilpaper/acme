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
    suite: "A Tour of Go",
    name: "Packages, variables and functions",
    slug: "a-tour-of-go-chapter-1",
    description: "Learn the basic components of any Go program.",
    cards: [
      {
        id: 1,
        prompt: "Keyword to define function",
        answer: "func",
      },
      {
        id: 2,
        prompt: "Go file entry point",
        answer: "package main",
      },
      {
        id: 3,
        prompt: "Function name visibility",
        answer: "Uppercase",
      },
      {
        id: 4,
        prompt: "Keyword to declare var",
        answer: "var",
      },
      {
        id: 5,
        prompt: "Value of uninitialized int",
        answer: "0",
      },
      {
        id: 6,
        prompt: "Short variable declaration",
        answer: ":=",
      },
      {
        id: 7,
        prompt: "Type location in declaration",
        answer: "after name",
      },
      {
        id: 8,
        prompt: "Prints to standard output",
        answer: "fmt.Println",
      },
      {
        id: 9,
        prompt: "Multiple return values (y/n)",
        answer: "Yes",
      },
      {
        id: 10,
        prompt: "Zero value of string",
        answer: '""',
      },
      {
        id: 11,
        prompt: "Zero value of bool",
        answer: "false",
      },
      {
        id: 12,
        prompt: "Zero value of float",
        answer: "0.0",
      },
      {
        id: 13,
        prompt: "Import grouping	( )",
        answer: "block",
      },
      {
        id: 14,
        prompt: "Declare variable group",
        answer: "var ( )",
      },
      {
        id: 15,
        prompt: "Return multiple values",
        answer: "comma-separated",
      },
      {
        id: 16,
        prompt: "Exported function rule",
        answer: "capital letter",
      },
      {
        id: 17,
        prompt: "Scope level of var",
        answer: "both",
      },
      {
        id: 18,
        prompt: "Function return type placement",
        answer: "after params",
      },
      {
        id: 19,
        prompt: "Return with names",
        answer: "naked return",
      },
      {
        id: 20,
        prompt: "Function call syntax",
        answer: "name()",
      },
    ],
  },
];
