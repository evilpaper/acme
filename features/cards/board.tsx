import { Deck } from "./deck";

const CARDS = [
  {
    id: 1,
    front: "What must every Go program start with?",
    back: "package main",
  },
  {
    id: 2,
    front: "How do you import a package in Go?",
    back: 'import "fmt"',
  },
  {
    id: 3,
    front: 'What does fmt.Println("Hi") do?',
    back: 'Prints "Hi" to standard output',
  },
  {
    id: 4,
    front: "How do you define a function in Go?",
    back: "func name(params) returnType { ... }",
  },
  {
    id: 5,
    front: "Can Go functions return multiple values?",
    back: "Yes, with comma-separated return values",
  },
  {
    id: 6,
    front: "What is the zero value of an int?",
    back: "0",
  },
  {
    id: 7,
    front: "What keyword declares a variable?",
    back: "var",
  },
  {
    id: 8,
    front: "How do you declare and initialize a variable?",
    back: "var x = 3 or x := 3",
  },
  {
    id: 9,
    front: "Where can variables be declared?",
    back: "Inside or outside functions",
  },
  {
    id: 10,
    front: "How are exported names written in Go?",
    back: "Start with a capital letter",
  },
];

export function Board() {
  const preparedCards = CARDS.map((card) => {
    return {
      ...card,
      rotation: card.id % 2 ? 6 : -8,
    };
  });

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck preparedCards={preparedCards} />
    </section>
  );
}
