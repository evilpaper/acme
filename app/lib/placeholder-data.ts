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
    correctAnswer: "It prevents the use of undefined variables",
    explanation:
      'The "use strict" directive enforces stricter parsing and error handling in JavaScript code, helping to prevent common mistakes such as using undeclared variables.',
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
];

export { users, quizzes, questions, question_choices };
