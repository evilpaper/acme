export const lydiaHallieQuestions = {
  name: "Lydia Hallie's JavaScript Questions",
  slug: "lydia-hallies-javascript-questions",
  description:
    "40 JavaScript questions sourced from Lydia Hallie's GitHub repository.",
  questions: [
    {
      question: "What is the output of `console.log([] + [])`?",
      options: ["0", "[]", "'' (empty string)", "undefined"],
      correctanswer: "'' (empty string)",
      explanation:
        "When using the `+` operator with arrays, they are converted to strings. `[]` becomes an empty string, so `[] + []` results in `''`.",
    },
    {
      question:
        "What happens when you compare `null == undefined` in JavaScript?",
      options: ["true", "false", "TypeError", "undefined"],
      correctanswer: "true",
      explanation:
        "In JavaScript, `null` and `undefined` are loosely equal (`==`), but they are not strictly equal (`===`).",
    },
    {
      question: "What does `typeof NaN` return?",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      correctanswer: "'number'",
      explanation:
        "Despite meaning 'Not-a-Number', `NaN` is actually of type `number` in JavaScript.",
    },
    {
      question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
      options: ["true", "false", "TypeError", "undefined"],
      correctanswer: "false",
      explanation:
        "Due to floating-point precision errors, `0.1 + 0.2` does not exactly equal `0.3`.",
    },
    {
      question: "What will `console.log(typeof null)` output?",
      options: ["'null'", "'object'", "'undefined'", "'NaN'"],
      correctanswer: "'object'",
      explanation:
        "Due to a historical JavaScript bug, `typeof null` incorrectly returns `'object'`.",
    },
    {
      question: "What is the result of `[] == ![]`?",
      options: ["true", "false", "TypeError", "undefined"],
      correctanswer: "true",
      explanation:
        "The empty array `[]` is coerced to `false`, so the expression evaluates to `true == false`, which results in `true`.",
    },
    {
      question: "How can you create a shallow copy of an array in JavaScript?",
      options: [
        "array.slice()",
        "array.copy()",
        "array.clone()",
        "array.duplicate()",
      ],
      correctanswer: "array.slice()",
      explanation:
        "The `slice()` method returns a shallow copy of an array when called without arguments.",
    },
    {
      question: "What will `console.log([1, 2] + [3, 4])` output?",
      options: ["[1, 2, 3, 4]", "'1,23,4'", "'1,2' + '3,4'", "Error"],
      correctanswer: "'1,23,4'",
      explanation:
        "When using the `+` operator, arrays are converted to strings and concatenated, so `[1, 2] + [3, 4]` becomes `'1,23,4'`.",
    },
  ],
};
