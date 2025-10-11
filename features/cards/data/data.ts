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
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        prompt: "Package",
        answer: "One or more source files linked together.",
      },
      {
        id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
        prompt: "main",
        answer: "First package in a Go program.",
      },
      {
        id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
        prompt: "The import keyword",
        answer: "Imports specified package into the current program.",
      },
      {
        id: "d4e5f6a7-b8c9-0123-def1-234567890123",
        prompt: "Variable",
        answer: "A storage location for holding a value.",
      },
      {
        id: "e5f6a7b8-c9d0-1234-ef12-345678901234",
        prompt: "type (in a variable context)",
        answer: "The set of allowed values the variable can hold.",
      },
      {
        id: "f6a7b8c9-d0e1-2345-f123-456789012345",
        prompt: "Structured variables",
        answer: "array, slice, struct, map.",
      },
      {
        id: "a7b8c9d0-e1f2-3456-1234-567890123456",
        prompt: "The := syntax",
        answer:
          "Shorthand for declaring and initializing a variable. Only available inside functions.",
      },
      {
        id: "b8c9d0e1-f2a3-4567-2345-678901234567",
        prompt: "Keyword for declaring variables",
        answer: "var",
      },
      {
        id: "c9d0e1f2-a3b4-5678-3456-789012345678",
        prompt: "Place for type in a var declaration.",
        answer: "Last",
      },
      {
        id: "d0e1f2a3-b4c5-6789-4567-890123456789",
        prompt: "Basic types",
        answer: "bool, string, int, etc.",
      },
      {
        id: "e1f2a3b4-c5d6-7890-5678-901234567890",
        prompt: "Value given to uninitialized vars",
        answer: "Zero value.",
      },
      {
        id: "f2a3b4c5-d6e7-8901-6789-012345678901",
        prompt: "How is type inferred?",
        answer: "From value",
      },
      {
        id: "a3b4c5d6-e7f8-9012-7890-123456789012",
        prompt: "Keyword for declaring constants",
        answer: "const",
      },
      {
        id: "b4c5d6e7-f8a9-0123-8901-234567890123",
        prompt: "Building blocks of for loops",
        answer: "init, condition, post.",
      },
      {
        id: "c5d6e7f8-a9b0-1234-9012-345678901234",
        prompt: "Separate building blocks in a for loop with...",
        answer: "...semicolons",
      },
      {
        id: "d6e7f8a9-b0c1-2345-0123-456789012345",
        prompt: "Optional parts of a for loop",
        answer: "init, post.",
      },
      {
        id: "e7f8a9b0-c1d2-3456-1234-567890123456",
        prompt: "Dropping init and post in a for loop makes it act like...",
        answer: "...a while loop.",
      },
      {
        id: "f8a9b0c1-d2e3-4567-2345-678901234567",
        prompt: "Simplify if-else chains with...",
        answer: "...the switch statement.",
      },
      {
        id: "a9b0c1d2-e3f4-5678-3456-789012345678",
        prompt: "switch evaluation order",
        answer: "Top to bottom.",
      },
      {
        id: "b0c1d2e3-f4a5-6789-4567-890123456789",
        prompt: "When is defer executed?",
        answer: "Later",
      },
      {
        id: "c1d2e3f4-a5b6-7890-5678-901234567890",
        prompt: "Can defer stack?",
        answer: "Yes",
      },
      {
        id: "d2e3f4a5-b6c7-8901-6789-012345678901",
        prompt: "Running order of stacked defers",
        answer: "LIFO, Last In First Out",
      },
      {
        id: "e3f4a5b6-c7d8-9012-7890-123456789012",
        prompt: "What data structure is defer like?",
        answer: "A stack.",
      },
      {
        id: "f4a5b6c7-d8e9-0123-8901-234567890123",
        prompt: "What does a pointer store?",
        answer: "A memory address.",
      },
      {
        id: "a5b6c7d8-e9f0-1234-9012-345678901234",
        prompt: "What operator creates a pointer?",
        answer: "&",
      },
      {
        id: "b6c7d8e9-f0a1-2345-0123-456789012345",
        prompt: "Syntax for accessing struct fields?",
        answer: "Dot syntax",
      },
      {
        id: "c7d8e9f0-a1b2-3456-1234-567890123456",
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
      {
        id: "d8e9f0a1-b2c3-4567-2345-678901234567",
        prompt: "8 bits grouped together",
        answer: "Byte",
      },
      {
        id: "e9f0a1b2-c3d4-5678-3456-789012345678",
        prompt: "Possible number of combinations in a byte",
        answer: "256 (0-255)",
      },
      {
        id: "f0a1b2c3-d4e5-6789-4567-890123456789",
        prompt: "Common analogous to memory locations and registers",
        answer: "Variables",
      },
      {
        id: "a1b2c3d4-e5f6-7890-5678-901234567890",
        prompt: "Symbol indicating a variable is a binary number",
        answer: "%",
      },
      {
        id: "b2c3d4e5-f6a7-8901-6789-012345678901",
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
      {
        id: "c3d4e5f6-a7b8-9012-7890-123456789012",
        prompt: "Type used for true/false?",
        answer: "boolean",
      },
      {
        id: "d4e5f6a7-b8c9-0123-8901-234567890123",
        prompt: "Type used for numbers?",
        answer: "number",
      },
      {
        id: "e5f6a7b8-c9d0-1234-9012-345678901234",
        prompt: "Type used for text?",
        answer: "string",
      },
      {
        id: "f6a7b8c9-d0e1-2345-0123-456789012345",
        prompt: "Symbol for creating template strings",
        answer: "` (backtick)",
      },
      {
        id: "a7b8c9d0-e1f2-3456-1234-567890123456",
        prompt: "Type for any value?",
        answer: "any",
      },
      {
        id: "b8c9d0e1-f2a3-4567-2345-678901234567",
        prompt: "Type that means no value?",
        answer: "void",
      },
      {
        id: "c9d0e1f2-a3b4-5678-3456-789012345678",
        prompt: "What is the type of never-returning functions?",
        answer: "never",
      },
      {
        id: "d0e1f2a3-b4c5-6789-4567-890123456789",
        prompt: "What is the type for unknown values?",
        answer: "unknown",
      },
      {
        id: "e1f2a3b4-c5d6-7890-5678-901234567890",
        prompt: "What is the type for null or undefined?",
        answer: "null | undefined",
      },
      {
        id: "f2a3b4c5-d6e7-8901-6789-012345678901",
        prompt: "What type defines a constant set of options?",
        answer: "enum",
      },
      {
        id: "a3b4c5d6-e7f8-9012-7890-123456789012",
        prompt: "What keyword declares a tuple?",
        answer: "[ ]",
      },
      {
        id: "b4c5d6e7-f8a9-0123-8901-234567890123",
        prompt: "What keyword makes a variable immutable?",
        answer: "const",
      },
      {
        id: "c5d6e7f8-a9b0-1234-9012-345678901234",
        prompt: "How to define an array of numbers?",
        answer: "number[]",
      },
      {
        id: "d6e7f8a9-b0c1-2345-0123-456789012345",
        prompt: "How to write a union type?",
        answer: "|",
      },
      {
        id: "e7f8a9b0-c1d2-3456-1234-567890123456",
        prompt: "How to define an object with keys?",
        answer: "{ key: type }",
      },
      {
        id: "f8a9b0c1-d2e3-4567-2345-678901234567",
        prompt: "What is a literal type in TypeScript?",
        answer: "A type that allows only one exact value, like 'yes' or 42",
      },
      {
        id: "a9b0c1d2-e3f4-5678-3456-789012345678",
        prompt: "How do you cast a value to another type in TypeScript?",
        answer: "Use `as` keyword, like `value as Type`",
      },
      {
        id: "b0c1d2e3-f4a5-6789-4567-890123456789",
        prompt: "What types does TypeScript infer automatically?",
        answer: "the most specific type based on the value or usage",
      },
      {
        id: "c1d2e3f4-a5b6-7890-5678-901234567890",
        prompt: "Which type disables type checking?",
        answer: "any",
      },
      {
        id: "d2e3f4a5-b6c7-8901-6789-012345678901",
        prompt: "Which type must be narrowed before use?",
        answer: "unknown",
      },
      {
        id: "e3f4a5b6-c7d8-9012-7890-123456789012",
        prompt: "What type means unreachable code?",
        answer: "never",
      },
      {
        id: "f4a5b6c7-d8e9-0123-8901-234567890123",
        prompt: "Which type is used for functions with no return?",
        answer: "void",
      },
      {
        id: "a5b6c7d8-e9f0-1234-9012-345678901234",
        prompt: "What type represents text and numbers?",
        answer: "string | number",
      },
      {
        id: "b6c7d8e9-f0a1-2345-0123-456789012345",
        prompt: "How to define a function parameter type?",
        answer: "name: type",
      },
      {
        id: "c7d8e9f0-a1b2-3456-1234-567890123456",
        prompt: "How to define a function return type?",
        answer: ": type",
      },
      {
        id: "d8e9f0a1-b2c3-4567-2345-678901234567",
        prompt: "What is the default type if none is given?",
        answer: "any",
      },
    ],
  },
];
