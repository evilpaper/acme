// This file contains placeholder data that will be used to populate the database if you start fresh.

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const quizzes = [
  {
    id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    name: "JavaScript 101",
    slug: "javascript-101",
    description:
      "A bunch of JavaScript questions taken from MDN and JavaScript Info.",
  },
];

const questions = [
  {
    id: "5bc20b1b-3290-4afd-b854-58bc1c390991",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question:
      'What is the purpose of the "use strict" directive in JavaScript?',
    correctanswer: "It prevents the use of undefined variables",
    explanation:
      'The "use strict" directive enforces stricter parsing and error handling in JavaScript code, helping to prevent common mistakes such as using undeclared variables.',
    source: "MDN",
  },
  {
    id: "6bc20b1b-3290-4afd-b854-58bc1c390992",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    correctanswer: "Array",
    explanation:
      "In JavaScript, arrays are not considered primitive data types; they are objects. Primitive types include Boolean, String, Number, Null, Undefined, Symbol, and BigInt.",
    source: "MDN",
  },
  {
    id: "7bc20b1b-3290-4afd-b854-58bc1c390993",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: 'What does "NaN" stand for in JavaScript?',
    correctanswer: "Not a Number",
    explanation:
      '"NaN" stands for "Not a Number" and represents a value that is not a legal number. It is usually the result of an invalid mathematical operation.',
    source: "MDN",
  },
  {
    id: "8bc20b1b-3290-4afd-b854-58bc1c390994",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "Which method is used to remove the last element from an array?",
    correctanswer: "pop()",
    explanation:
      "The `pop()` method removes the last element from an array and returns that element. It modifies the original array.",
    source: "MDN",
  },
  {
    id: "9bc20b1b-3290-4afd-b854-58bc1c390995",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What will the following code output: console.log(typeof null);?",
    correctanswer: '"object"',
    explanation:
      "In JavaScript, `null` is considered an object type due to a historical bug in the language implementation.",
    source: "MDN",
  },
  {
    id: "0bc20b1b-3290-4afd-b854-58bc1c390996",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question:
      "Which of the following methods is used to convert a JSON string into a JavaScript object?",
    correctanswer: "JSON.parse()",
    explanation:
      "The `JSON.parse()` method is used to convert a JSON string into a JavaScript object.",
    source: "javascript.info",
  },
  {
    id: "1bc20b1b-3290-4afd-b854-58bc1c390997",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: 'What will `console.log(1 + "2" + "2");` output?',
    correctanswer: "122",
    explanation:
      'JavaScript performs string concatenation when it encounters a string. In this case, it first adds `1` to `"2"` resulting in `"12"`, and then adds `"2"` resulting in `"122"`.',
    source: "javascript.info",
  },
  {
    id: "2bc20b1b-3290-4afd-b854-58bc1c390998",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "How do you create a new object in JavaScript?",
    correctanswer: "var obj = {};",
    explanation:
      "Objects in JavaScript can be created using the object literal notation with curly braces `{}`.",
    source: "MDN",
  },
  {
    id: "3bc20b1b-3290-4afd-b854-58bc1c390999",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What is the difference between `==` and `===` in JavaScript?",
    correctanswer:
      "`==` performs type conversion before comparison, while `===` does not",
    explanation:
      "`==` allows type coercion, meaning it converts the operands to the same type before comparing, while `===` compares both value and type without conversion.",
    source: "javascript.info",
  },
  {
    id: "4bc20b1b-3290-4afd-b854-58bc1c390990",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What is the output of `typeof undefined == typeof NULL`?",
    correctanswer: "true",
    explanation:
      "Both `undefined` and `NULL` are treated as the same type in this comparison because JavaScript is case-sensitive and `NULL` is treated as an undeclared variable.",
    source: "javascript.info",
  },
  {
    id: "5bc20b1b-3290-4afd-b854-58bc1c390981",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question:
      "Which of the following loops is best used when the number of iterations is known?",
    correctanswer: "for",
    explanation:
      "The `for` loop is ideal when the number of iterations is known beforehand, as it allows initialization, condition, and incrementation in a single line.",
    source: "MDN",
  },
  {
    id: "6bc20b1b-3290-4afd-b854-58bc1c390982",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What does the `this` keyword refer to in JavaScript?",
    correctanswer: "Depends on the execution context",
    explanation:
      "In JavaScript, `this` refers to different objects depending on where it is used: in a method, it refers to the owner object; in a function, it refers to the global object or undefined in strict mode.",
    source: "javascript.info",
  },
  {
    id: "7bc20b1b-3290-4afd-b854-58bc1c390983",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What is the output of `console.log(0.1 + 0.2 === 0.3);`?",
    correctanswer: "false",
    explanation:
      "Due to floating-point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`. The actual result is a slightly imprecise value like `0.30000000000000004`.",
    source: "MDN",
  },
  {
    id: "8bc20b1b-3290-4afd-b854-58bc1c390984",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "Which of these values is falsy in JavaScript?",
    correctanswer: "0",
    explanation:
      'In JavaScript, `0` is considered falsy, whereas `"false"`, `"0"`, and empty arrays are truthy values. Falsy values include `0`, `""`, `null`, `undefined`, `false`, and `NaN`.',
    source: "javascript.info",
  },
  {
    id: "9bc20b1b-3290-4afd-b854-58bc1c390985",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What is a closure in JavaScript?",
    correctanswer: "A function bundled together with its lexical environment",
    explanation:
      "A closure is a function that retains access to its outer lexical scope, even after the outer function has returned.",
    source: "javascript.info",
  },
  {
    id: "0bc20b1b-3290-4afd-b854-58bc1c390986",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What does the `map()` function do in JavaScript?",
    correctanswer:
      "It creates a new array by calling a function on every element in the original array",
    explanation:
      "The `map()` function calls a provided function on each element of an array and returns a new array containing the results.",
    source: "MDN",
  },
  {
    id: "1bc20b1b-3290-4afd-b854-58bc1c390987",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question:
      "Which of the following is not a valid way to declare a variable in JavaScript?",
    correctanswer: "assign",
    explanation:
      "`var`, `let`, and `const` are valid ways to declare variables in JavaScript, while `assign` is not.",
    source: "javascript.info",
  },
  {
    id: "2bc20b1b-3290-4afd-b854-58bc1c390988",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What will `console.log([] + {});` output in JavaScript?",
    correctanswer: '"[object Object]"',
    explanation:
      'When adding an empty array and an object, JavaScript first converts them to their string representations. `[]` becomes `""` and `{}` becomes `"[object Object]"`, so the result is `"[object Object]"`.',
    source: "MDN",
  },
  {
    id: "3bc20b1b-3290-4afd-b854-58bc1c390989",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "Which method is used to stop event propagation in JavaScript?",
    correctanswer: "stopPropagation()",
    explanation:
      "The `stopPropagation()` method prevents further propagation of the current event in the capturing and bubbling phases.",
    source: "MDN",
  },
  {
    id: "4bc20b1b-3290-4afd-b854-58bc1c390980",
    quiz_id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    question: "What will `console.log(typeof NaN);` output?",
    correctanswer: '"number"',
    explanation:
      '`NaN` is considered a special value of the number type in JavaScript. Therefore, `typeof NaN` returns `"number"`.',
    source: "MDN",
  },
];

const question_choices = [
  {
    id: "76afe296-8ab8-4dcf-96df-ee11e8f173de",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390991",
    text: "It makes JavaScript faster",
  },
  {
    id: "966f4b6f-9b53-4f20-adc5-25c8c15ba53a",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390991",
    text: "It prevents the use of undefined variables",
  },
  {
    id: "1814b095-d279-41c4-be37-d8d0e201cc3b",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390991",
    text: "It allows for more efficient memory management",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da2444b",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390991",
    text: "It disables all deprecated features",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da2444c",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390992",
    text: "Boolean",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da2444d",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390992",
    text: "String",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da2444e",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390992",
    text: "Array",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da2444f",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390992",
    text: "Number",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24450",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390993",
    text: "Not a Number",
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24451",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390993",
    text: "Null and Null",
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24452",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390993",
    text: "New Array Number",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24453",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390993",
    text: "Name a Number",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24454",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390994",
    text: "shift()",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24455",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390994",
    text: "pop()",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24456",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390994",
    text: "splice()",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24457",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390994",
    text: "delete",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24458",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390995",
    text: '"null"',
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24459",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390995",
    text: '"object"',
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24460",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390995",
    text: '"undefined"',
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24461",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390995",
    text: '"boolean"',
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24462",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390996",
    text: "JSON.stringify()",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24463",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390996",
    text: "JSON.parse()",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24464",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390996",
    text: "parseInt()",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24465",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390996",
    text: "eval()",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24466",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390997",
    text: "122",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24467",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390997",
    text: "32",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24468",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390997",
    text: "NaN",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24469",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390997",
    text: "3",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24470",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390998",
    text: "var obj = Object();",
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24471",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390998",
    text: "var obj = {};",
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24472",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390998",
    text: "var obj = createObject();",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24473",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390998",
    text: "var obj = new[];",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24474",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390999",
    text: "`==` checks for type and value equality, while `===` checks only value equality",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24475",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390999",
    text: "`==` performs type conversion before comparison, while `===` does not",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24476",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390999",
    text: "`==` is faster than `===`",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24477",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390999",
    text: "`===` performs type conversion before comparison, while `==` does not",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24478",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390990",
    text: "true",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24479",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390990",
    text: "false",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24480",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390990",
    text: "TypeError",
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24481",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390990",
    text: "undefined",
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24482",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390981",
    text: "for",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24483",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390981",
    text: "while",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24484",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390981",
    text: "do-while",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24485",
    question_id: "5bc20b1b-3290-4afd-b854-58bc1c390981",
    text: "forEach",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24486",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390982",
    text: "The current object",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24487",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390982",
    text: "The global object",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24488",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390982",
    text: "The parent object",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24489",
    question_id: "6bc20b1b-3290-4afd-b854-58bc1c390982",
    text: "Depends on the execution context",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24490",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390983",
    text: "true",
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24491",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390983",
    text: "false",
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24492",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390983",
    text: "undefined",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24493",
    question_id: "7bc20b1b-3290-4afd-b854-58bc1c390983",
    text: "TypeError",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24494",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390984",
    text: '"false"',
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24495",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390984",
    text: "0",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24496",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390984",
    text: '"0"',
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24497",
    question_id: "8bc20b1b-3290-4afd-b854-58bc1c390984",
    text: "[]",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24498",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390985",
    text: "A function that is called immediately after it is defined",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24499",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390985",
    text: "A function bundled together with its lexical environment",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24500",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390985",
    text: "A function without a return value",
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24501",
    question_id: "9bc20b1b-3290-4afd-b854-58bc1c390985",
    text: "A method that creates objects",
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24502",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390986",
    text: "It filters elements from an array",
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24503",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390986",
    text: "It creates a new array by calling a function on every element in the original array",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24504",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390986",
    text: "It sorts an array",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24505",
    question_id: "0bc20b1b-3290-4afd-b854-58bc1c390986",
    text: "It reduces an array to a single value",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24506",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390987",
    text: "var",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24507",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390987",
    text: "const",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24508",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390987",
    text: "let",
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24509",
    question_id: "1bc20b1b-3290-4afd-b854-58bc1c390987",
    text: "assign",
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24510",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390988",
    text: '"[object Object]"',
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24511",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390988",
    text: '"[object Object]{}"',
  },
  {
    id: "1fa112ed-9aee-424c-ad61-69389da24512",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390988",
    text: '"[]"',
  },
  {
    id: "2fa112ed-9aee-424c-ad61-69389da24513",
    question_id: "2bc20b1b-3290-4afd-b854-58bc1c390988",
    text: "undefined",
  },
  {
    id: "3fa112ed-9aee-424c-ad61-69389da24514",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390989",
    text: "stopPropagation()",
  },
  {
    id: "4fa112ed-9aee-424c-ad61-69389da24515",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390989",
    text: "preventDefault()",
  },
  {
    id: "5fa112ed-9aee-424c-ad61-69389da24516",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390989",
    text: "stop()",
  },
  {
    id: "6fa112ed-9aee-424c-ad61-69389da24517",
    question_id: "3bc20b1b-3290-4afd-b854-58bc1c390989",
    text: "cancelEvent()",
  },
  {
    id: "7fa112ed-9aee-424c-ad61-69389da24518",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390980",
    text: '"number"',
  },
  {
    id: "8fa112ed-9aee-424c-ad61-69389da24519",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390980",
    text: '"NaN"',
  },
  {
    id: "9fa112ed-9aee-424c-ad61-69389da24520",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390980",
    text: '"undefined"',
  },
  {
    id: "0fa112ed-9aee-424c-ad61-69389da24521",
    question_id: "4bc20b1b-3290-4afd-b854-58bc1c390980",
    text: '"object"',
  },
];

/**
 * Checks if all IDs in question_choices are unique
 * @returns {boolean} true if all IDs are unique, false if duplicates are found
 */
function areQuestionChoiceIdsUnique(): boolean {
  const ids = question_choices.map((choice) => choice.id);
  const uniqueIds = new Set(ids);
  return ids.length === uniqueIds.size;
}

// Example usage:
console.log(
  areQuestionChoiceIdsUnique()
    ? "All question choices IDs are unique."
    : "WARNING! duplicate question choices IDs found.",
);

export { users, quizzes, questions, question_choices };
