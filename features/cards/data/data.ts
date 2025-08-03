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
    suite: "A Tour of Go",
    name: "Packages, variables and functions",
    slug: "a-tour-of-go-chapter-1",
    description: "Learn the basic components of any Go program.",
    cards: [
      {
        id: 1,
        prompt: "What is every Go program made of?",
        answer: "Packages",
      },
      {
        id: 2,
        prompt: "What is the first package in a Go program?",
        answer: "main",
      },
      { id: 3, prompt: "How are packages imported?", answer: "import keyword" },
      { id: 4, prompt: "How is a name exported?", answer: "Capital letter" },
      { id: 5, prompt: "What keyword defines a function?", answer: "func" },
      {
        id: 6,
        prompt: "How many results can Go functions return?",
        answer: "Any number",
      },
      {
        id: 7,
        prompt: "Where is the type located in function args?",
        answer: "Last",
      },
      {
        id: 8,
        prompt: "What does return with no values do?",
        answer: "Returns named values",
      },
      { id: 9, prompt: "What keyword declares variables?", answer: "var" },
      {
        id: 10,
        prompt: "Where is the type located in var declaration?",
        answer: "Last",
      },
      { id: 11, prompt: "Can var omit type with init value?", answer: "Yes" },
      { id: 12, prompt: "What short form replaces var?", answer: ":=" },
      {
        id: 13,
        prompt: "What are Go's basic types?",
        answer: "bool, string, int, etc.",
      },
      {
        id: 14,
        prompt: "What is the value of uninitialized vars?",
        answer: "Zero value",
      },
      { id: 15, prompt: "How to convert value v to type T?", answer: "T(v)" },
      { id: 16, prompt: "How is type inferred?", answer: "From value" },
      { id: 17, prompt: "How are constants declared?", answer: "const" },
      {
        id: 18,
        prompt: "Are numeric constants typed?",
        answer: "Not by default",
      },
      {
        id: 19,
        prompt: "What type do untyped constants get?",
        answer: "Needed by context",
      },
      { id: 20, prompt: "What is the precision of constants?", answer: "High" },
    ],
  },
  {
    topic: "Go",
    id: "b7e2e2c2-2f3a-4e7a-9c1d-2e4b8e7f9c3a",
    suite: "A Tour of Go",
    name: "Flow control statements: for, if, else, switch and defer",
    slug: "a-tour-of-go-chapter-2",
    description:
      "Learn how to control the flow of your code with conditionals, loops, switches and defers.",
    cards: [
      { id: 1, prompt: "How many loop types does Go have?", answer: "1" },
      {
        id: 2,
        prompt: "Which parts make up a for loop?",
        answer: "init, condition, post",
      },
      {
        id: 3,
        prompt: "What separates parts of a for loop?",
        answer: "Semicolons",
      },
      { id: 4, prompt: "Which for parts are optional?", answer: "init, post" },
      {
        id: 5,
        prompt: "What happens if you drop init and post?",
        answer: "Acts like while",
      },
      {
        id: 6,
        prompt: "What if a for loop has no condition?",
        answer: "Runs forever",
      },
      { id: 7, prompt: "Are parentheses required in if?", answer: "No" },
      { id: 8, prompt: "Are braces required in if?", answer: "Yes" },
      { id: 9, prompt: "Can if have a short statement?", answer: "Yes" },
      {
        id: 10,
        prompt: "When is short if statement run?",
        answer: "Before condition",
      },
      {
        id: 11,
        prompt: "Where is if-declared variable available?",
        answer: "Inside if and else",
      },
      {
        id: 12,
        prompt: "What does switch simplify?",
        answer: "if-else chains",
      },
      { id: 13, prompt: "How is switch evaluated?", answer: "Top to bottom" },
      {
        id: 14,
        prompt: "What is switch with no condition?",
        answer: "switch true",
      },
      { id: 15, prompt: "When does a deferred call run?", answer: "On return" },
      {
        id: 16,
        prompt: "When are defer arguments evaluated?",
        answer: "Immediately",
      },
      { id: 17, prompt: "When is defer executed?", answer: "Later" },
      { id: 18, prompt: "Can defer stack?", answer: "Yes" },
      { id: 19, prompt: "What order are stacked defers run?", answer: "LIFO" },
      {
        id: 20,
        prompt: "What data structure is defer like?",
        answer: "A stack",
      },
    ],
  },
  {
    topic: "Go",
    id: "2cc42781-8970-4fda-acbc-11c8e7044dc0",
    suite: "A Tour of Go",
    name: "More types: structs, slices and maps",
    slug: "a-tour-of-go-chapter-3",
    description:
      "Learn how to define types based on existing ones: this lesson covers structs, arrays, slices, and maps.",
    cards: [
      {
        id: 1,
        prompt: "What does a pointer store?",
        answer: "A memory address",
      },
      { id: 2, prompt: "What operator creates a pointer?", answer: "&" },
      { id: 3, prompt: "What type is a pointer to T?", answer: "*T" },
      { id: 4, prompt: "What is a struct?", answer: "A field collection" },
      { id: 5, prompt: "How to access struct fields?", answer: "Dot syntax" },
      { id: 6, prompt: "Can you access fields via a pointer?", answer: "Yes" },
      {
        id: 7,
        prompt: "What is a struct literal?",
        answer: "A new value with fields",
      },
      { id: 8, prompt: "What is the type [n]T?", answer: "Array" },
      { id: 9, prompt: "Are arrays resizable?", answer: "No" },
      { id: 10, prompt: "What is a slice?", answer: "Resizable view of array" },
      { id: 11, prompt: "Does a slice store data?", answer: "No" },
      {
        id: 12,
        prompt: "What is a slice literal?",
        answer: "Array literal without length",
      },
      { id: 13, prompt: "Can you omit slice bounds?", answer: "Yes" },
      {
        id: 14,
        prompt: "What does a slice have?",
        answer: "Length and capacity",
      },
      { id: 15, prompt: "What is the zero value of a slice?", answer: "nil" },
      { id: 16, prompt: "What creates dynamic slices?", answer: "make" },
      { id: 17, prompt: "Can slices hold other slices?", answer: "Yes" },
      { id: 18, prompt: "What adds elements to a slice?", answer: "append" },
      {
        id: 19,
        prompt: "What does range iterate over?",
        answer: "slice or map",
      },
      { id: 20, prompt: "How to skip range values?", answer: "_" },
      { id: 21, prompt: "What does a map do?", answer: "Maps keys to values" },
      {
        id: 22,
        prompt: "What is a map literal like?",
        answer: "struct literal with keys",
      },
      { id: 23, prompt: "Can top-level map type be omitted?", answer: "Yes" },
      { id: 24, prompt: "Can map values be updated?", answer: "Yes" },
      { id: 25, prompt: "Are functions values in Go?", answer: "Yes" },
      { id: 26, prompt: "Can functions be closures?", answer: "Yes" },
    ],
  },
  {
    topic: "Assembly",
    id: "3c3c2f1b-7248-4f5e-879d-2381a2c2cc18",
    suite: "6502 Assembly",
    name: "Basics fo Assembly",
    slug: "6502-assembly-basics",
    description: "Dip your toes into 6502 Assembler",
    cards: [
      { id: 1, prompt: "8 bits grouped together?", answer: "Byte" },
      {
        id: 2,
        prompt: "Possible number of combinations in a byte?",
        answer: "256 (0-255)",
      },
      {
        id: 3,
        prompt: "Common analogous to memory locations and registers",
        answer: "Variables",
      },
      {
        id: 4,
        prompt: "Symbol indicating a variable is a binary number?",
        answer: "%",
      },
      {
        id: 5,
        prompt: "Symbol indicating a variable is a Hexadecimal number?",
        answer: "$",
      },
    ],
  },
  {
    topic: "TypeScript",
    id: "3c3c2f1b-7248-4f5e-879d-2381a2c2cc18",
    suite: "TypeScript",
    name: "Basics types",
    slug: "typescript-basics",
    description: "Dive into TypeScript fundamentals",
    cards: [
      { id: 1, prompt: "What type is used for true/false?", answer: "boolean" },
      { id: 2, prompt: "What type stores numbers?", answer: "number" },
      { id: 3, prompt: "What type is used for text?", answer: "string" },
      {
        id: 4,
        prompt: "What symbol makes a template string?",
        answer: "` (backtick)",
      },
      { id: 5, prompt: "What is the type for any value?", answer: "any" },
      { id: 6, prompt: "What type means no value?", answer: "void" },
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
