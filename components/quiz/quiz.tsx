'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    question:
      'What is the purpose of the "use strict" directive in JavaScript?',
    options: [
      'It makes JavaScript faster',
      'It prevents the use of undefined variables',
      'It allows for more efficient memory management',
      'It disables all deprecated features',
    ],
    correctAnswer: 'It prevents the use of undefined variables',
    explanation:
      'The "use strict" directive enforces stricter parsing and error handling in JavaScript code, helping to prevent common mistakes such as using undeclared variables. [MDN]',
  },
  {
    question:
      'Which of the following is not a primitive data type in JavaScript?',
    options: ['Boolean', 'String', 'Array', 'Number'],
    correctAnswer: 'Array',
    explanation:
      'In JavaScript, arrays are not considered primitive data types; they are objects. Primitive types include Boolean, String, Number, Null, Undefined, Symbol, and BigInt. [MDN]',
  },
  {
    question: 'What does "NaN" stand for in JavaScript?',
    options: [
      'Not a Number',
      'Null and Null',
      'New Array Number',
      'Name a Number',
    ],
    correctAnswer: 'Not a Number',
    explanation:
      '"NaN" stands for "Not a Number" and represents a value that is not a legal number. It is usually the result of an invalid mathematical operation. [MDN]',
  },
  {
    question: 'Which method is used to remove the last element from an array?',
    options: ['shift()', 'pop()', 'splice()', 'delete'],
    correctAnswer: 'pop()',
    explanation:
      'The `pop()` method removes the last element from an array and returns that element. It modifies the original array. [MDN]',
  },
  {
    question: 'What will the following code output: console.log(typeof null);?',
    options: ['"null"', '"object"', '"undefined"', '"boolean"'],
    correctAnswer: '"object"',
    explanation:
      'In JavaScript, `null` is considered an object type due to a historical bug in the language implementation. [MDN]',
  },
  {
    question:
      'Which of the following methods is used to convert a JSON string into a JavaScript object?',
    options: ['JSON.stringify()', 'JSON.parse()', 'parseInt()', 'eval()'],
    correctAnswer: 'JSON.parse()',
    explanation:
      'The `JSON.parse()` method is used to convert a JSON string into a JavaScript object. [javascript.info]',
  },
  {
    question: 'What will `console.log(1 + "2" + "2");` output?',
    options: ['122', '32', 'NaN', '3'],
    correctAnswer: '122',
    explanation:
      'JavaScript performs string concatenation when it encounters a string. In this case, it first adds `1` to `"2"` resulting in `"12"`, and then adds `"2"` resulting in `"122"`. [javascript.info]',
  },
  {
    question: 'How do you create a new object in JavaScript?',
    options: [
      'var obj = Object();',
      'var obj = {};',
      'var obj = createObject();',
      'var obj = new[];',
    ],
    correctAnswer: 'var obj = {};',
    explanation:
      'Objects in JavaScript can be created using the object literal notation with curly braces `{}`. [MDN]',
  },
  {
    question: 'What is the difference between `==` and `===` in JavaScript?',
    options: [
      '`==` checks for type and value equality, while `===` checks only value equality',
      '`==` performs type conversion before comparison, while `===` does not',
      '`==` is faster than `===`',
      '`===` performs type conversion before comparison, while `==` does not',
    ],
    correctAnswer:
      '`==` performs type conversion before comparison, while `===` does not',
    explanation:
      '`==` allows type coercion, meaning it converts the operands to the same type before comparing, while `===` compares both value and type without conversion. [javascript.info]',
  },
  {
    question: 'What is the output of `typeof undefined == typeof NULL`?',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'true',
    explanation:
      'Both `undefined` and `NULL` are treated as the same type in this comparison because JavaScript is case-sensitive and `NULL` is treated as an undeclared variable. [javascript.info]',
  },
  {
    question:
      'Which of the following loops is best used when the number of iterations is known?',
    options: ['for', 'while', 'do-while', 'forEach'],
    correctAnswer: 'for',
    explanation:
      'The `for` loop is ideal when the number of iterations is known beforehand, as it allows initialization, condition, and incrementation in a single line. [MDN]',
  },
  {
    question: 'What does the `this` keyword refer to in JavaScript?',
    options: [
      'The current object',
      'The global object',
      'The parent object',
      'Depends on the execution context',
    ],
    correctAnswer: 'Depends on the execution context',
    explanation:
      'In JavaScript, `this` refers to different objects depending on where it is used: in a method, it refers to the owner object; in a function, it refers to the global object or undefined in strict mode. [javascript.info]',
  },
  {
    question: 'What is the output of `console.log(0.1 + 0.2 === 0.3);`?',
    options: ['true', 'false', 'undefined', 'TypeError'],
    correctAnswer: 'false',
    explanation:
      'Due to floating-point precision issues in JavaScript, `0.1 + 0.2` does not exactly equal `0.3`. The actual result is a slightly imprecise value like `0.30000000000000004`. [MDN]',
  },
  {
    question: 'Which of these values is falsy in JavaScript?',
    options: ['"false"', '0', '"0"', '[]'],
    correctAnswer: '0',
    explanation:
      'In JavaScript, `0` is considered falsy, whereas `"false"`, `"0"`, and empty arrays are truthy values. Falsy values include `0`, `""`, `null`, `undefined`, `false`, and `NaN`. [javascript.info]',
  },
  {
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that is called immediately after it is defined',
      'A function bundled together with its lexical environment',
      'A function without a return value',
      'A method that creates objects',
    ],
    correctAnswer: 'A function bundled together with its lexical environment',
    explanation:
      'A closure is a function that retains access to its outer lexical scope, even after the outer function has returned. [javascript.info]',
  },
  {
    question: 'What does the `map()` function do in JavaScript?',
    options: [
      'It filters elements from an array',
      'It creates a new array by calling a function on every element in the original array',
      'It sorts an array',
      'It reduces an array to a single value',
    ],
    correctAnswer:
      'It creates a new array by calling a function on every element in the original array',
    explanation:
      'The `map()` function calls a provided function on each element of an array and returns a new array containing the results. [MDN]',
  },
  {
    question:
      'Which of the following is not a valid way to declare a variable in JavaScript?',
    options: ['var', 'const', 'let', 'assign'],
    correctAnswer: 'assign',
    explanation:
      '`var`, `let`, and `const` are valid ways to declare variables in JavaScript, while `assign` is not. [javascript.info]',
  },
  {
    question: 'What will `console.log([] + {});` output in JavaScript?',
    options: ['"[object Object]"', '"[object Object]{}"', '"[]"', 'undefined'],
    correctAnswer: '"[object Object]"',
    explanation:
      'When adding an empty array and an object, JavaScript first converts them to their string representations. `[]` becomes `""` and `{}` becomes `"[object Object]"`, so the result is `"[object Object]"`. [MDN]',
  },
  {
    question: 'Which method is used to stop event propagation in JavaScript?',
    options: [
      'stopPropagation()',
      'preventDefault()',
      'stop()',
      'cancelEvent()',
    ],
    correctAnswer: 'stopPropagation()',
    explanation:
      'The `stopPropagation()` method prevents further propagation of the current event in the capturing and bubbling phases. [MDN]',
  },
  {
    question: 'What will `console.log(typeof NaN);` output?',
    options: ['"number"', '"NaN"', '"undefined"', '"object"'],
    correctAnswer: '"number"',
    explanation:
      '`NaN` is considered a special value of the number type in JavaScript. Therefore, `typeof NaN` returns `"number"`. [MDN]',
  },
  {
    question: 'Which function is used to merge arrays in JavaScript?',
    options: ['concat()', 'merge()', 'join()', 'combine()'],
    correctAnswer: 'concat()',
    explanation:
      'The `concat()` method is used to merge two or more arrays without modifying the original arrays. It returns a new array. [MDN]',
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answer: string) => {
    console.log('Running handleAnswer');
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-6">
      {!showResult ? (
        <>
          <div className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </div>
          <Progress value={((currentQuestion + 1) / questions.length) * 100} />
          <h2 className="text-xl font-semibold">
            {questions[currentQuestion].question}
          </h2>
          <div className="w-full space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === option ? 'default' : 'outline'}
                className="w-full justify-start text-left"
                onClick={() => handleAnswer(option)}
                disabled={isAnswered}
              >
                {option}
              </Button>
            ))}
          </div>
          {isAnswered && (
            <div className="flex w-full rounded-md border border-stone-400 p-4">
              {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                <p>
                  Correct! <br /> {questions[currentQuestion].explanation}
                </p>
              ) : (
                <p>
                  Incorrect! <br /> The correct answer is:{' '}
                  {questions[currentQuestion].correctAnswer} <br />
                  {questions[currentQuestion].explanation}
                </p>
              )}
            </div>
          )}
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
        isAnswered && (
          <Button onClick={handleNext}>
            {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
          </Button>
        )
      ) : (
        <Button onClick={resetQuiz}>Restart Quiz</Button>
      )}
    </div>
  );
}
