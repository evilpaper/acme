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
    topic: "Go",
    id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    name: "Go",
    slug: "go",
    description:
      "Go is an open source programming language that makes it simple to build secure, scalable systems.",
    cards: [
      {
        id: 1,
        prompt: "Package",
        answer: "One or more source files linked together.",
      },
      {
        id: 2,
        prompt: "main",
        answer: "First package in a Go program.",
      },
      {
        id: 3,
        prompt: "The import keyword",
        answer: "Imports specified package into the current program.",
      },
      {
        id: 4,
        prompt: "Variable",
        answer: "A storage location for holding a value.",
      },
      {
        id: 5,
        prompt: "type (in a variable context)",
        answer: "The set of allowed values the variable can hold.",
      },
      {
        id: 6,
        prompt: "Structured variables",
        answer: "array, slice, struct, map.",
      },
      {
        id: 8,
        prompt: "The := syntax",
        answer:
          "Shorthand for declaring and initializing a variable. Only available inside functions.",
      },
      { id: 9, prompt: "Keyword for declaring variables", answer: "var" },
      {
        id: 10,
        prompt: "Place for type in a var declaration.",
        answer: "Last",
      },
      {
        id: 13,
        prompt: "Basic types",
        answer: "bool, string, int, etc.",
      },
      {
        id: 14,
        prompt: "Value given to uninitialized vars",
        answer: "Zero value.",
      },
      { id: 16, prompt: "How is type inferred?", answer: "From value" },
      { id: 17, prompt: "Keyword for declaring constants", answer: "const" },
      {
        id: 22,
        prompt: "Building blocks of for loops",
        answer: "init, condition, post.",
      },
      {
        id: 23,
        prompt: "Separate building blocks in a for loop with...",
        answer: "...semicolons",
      },
      { id: 24, prompt: "Optional parts of a for loop", answer: "init, post." },
      {
        id: 25,
        prompt: "Dropping init and post in a for loop makes it act like...",
        answer: "...a while loop.",
      },
      {
        id: 32,
        prompt: "Simplify if-else chains with...",
        answer: "...the switch statement.",
      },
      { id: 33, prompt: "switch evaluation order", answer: "Top to bottom." },
      { id: 37, prompt: "When is defer executed?", answer: "Later" },
      { id: 38, prompt: "Can defer stack?", answer: "Yes" },
      {
        id: 39,
        prompt: "Running order of stacked defers",
        answer: "LIFO, Last In First Out",
      },
      {
        id: 40,
        prompt: "What data structure is defer like?",
        answer: "A stack.",
      },
      {
        id: 41,
        prompt: "What does a pointer store?",
        answer: "A memory address.",
      },
      { id: 42, prompt: "What operator creates a pointer?", answer: "&" },
      {
        id: 45,
        prompt: "Syntax for accessing struct fields?",
        answer: "Dot syntax",
      },
      {
        id: 50,
        prompt: "slice data type",
        answer: "A window into an array.",
      },
    ],
  },
  {
    topic: "Assembly",
    id: "3c3c2f1b-7248-4f5e-879d-2381a2c2cc18",
    name: "6502 Assembly",
    slug: "6502-assembly",
    description:
      "6502 assembly is a very low-level language that works specifically for the 6502 microprocessor — a very popular processor from the 1970s.",
    cards: [
      { id: 1, prompt: "8 bits grouped together", answer: "Byte" },
      {
        id: 2,
        prompt: "Possible number of combinations in a byte",
        answer: "256 (0-255)",
      },
      {
        id: 3,
        prompt: "Common analogous to memory locations and registers",
        answer: "Variables",
      },
      {
        id: 4,
        prompt: "Symbol indicating a variable is a binary number",
        answer: "%",
      },
      {
        id: 5,
        prompt: "Symbol indicating a variable is a Hexadecimal number",
        answer: "$",
      },
    ],
  },
  {
    topic: "TypeScript",
    id: "3c3c2f1b-7248-4f5e-879d-2381a2c2cc18",
    name: "TypeScript",
    slug: "typescript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    cards: [
      { id: 1, prompt: "Type used for true/false?", answer: "boolean" },
      { id: 2, prompt: "Type used for numbers?", answer: "number" },
      { id: 3, prompt: "Type used for text?", answer: "string" },
      {
        id: 4,
        prompt: "Symbol for creating template strings",
        answer: "` (backtick)",
      },
      { id: 5, prompt: "Type for any value?", answer: "any" },
      { id: 6, prompt: "Type that means no value?", answer: "void" },
      {
        id: 7,
        prompt: "What is the type of never-returning functions?",
        answer: "never",
      },
      {
        id: 8,
        prompt: "What is the type for unknown values?",
        answer: "unknown",
      },
      {
        id: 9,
        prompt: "What is the type for null or undefined?",
        answer: "null | undefined",
      },
      {
        id: 10,
        prompt: "What type defines a constant set of options?",
        answer: "enum",
      },
      { id: 11, prompt: "What keyword declares a tuple?", answer: "[ ]" },
      {
        id: 12,
        prompt: "What keyword makes a variable immutable?",
        answer: "const",
      },
      {
        id: 13,
        prompt: "How to define an array of numbers?",
        answer: "number[]",
      },
      { id: 14, prompt: "How to write a union type?", answer: "|" },
      {
        id: 15,
        prompt: "How to define an object with keys?",
        answer: "{ key: type }",
      },
      {
        id: 16,
        prompt: "What is a literal type in TypeScript?",
        answer: "A type that allows only one exact value, like 'yes' or 42",
      },
      {
        id: 17,
        prompt: "How do you cast a value to another type in TypeScript?",
        answer: "Use `as` keyword, like `value as Type`",
      },
      {
        id: 18,
        prompt: "What types does TypeScript infer automatically?",
        answer: "the most specific type based on the value or usage",
      },
      { id: 19, prompt: "Which type disables type checking?", answer: "any" },
      {
        id: 20,
        prompt: "Which type must be narrowed before use?",
        answer: "unknown",
      },
      { id: 21, prompt: "What type means unreachable code?", answer: "never" },
      {
        id: 22,
        prompt: "Which type is used for functions with no return?",
        answer: "void",
      },
      {
        id: 23,
        prompt: "What type represents text and numbers?",
        answer: "string | number",
      },
      {
        id: 24,
        prompt: "How to define a function parameter type?",
        answer: "name: type",
      },
      {
        id: 25,
        prompt: "How to define a function return type?",
        answer: ": type",
      },
      {
        id: 26,
        prompt: "What is the default type if none is given?",
        answer: "any",
      },
    ],
  },
];
