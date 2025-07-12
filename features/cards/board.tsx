import { Deck } from "./deck";

const CARDS = [
  {
    id: 1,
    term: "goroutine",
    definition: "Lightweight thread managed by the Go runtime.",
  },
  {
    id: 2,
    term: "channel",
    definition: "Pipe for goroutines to communicate and synchronize.",
  },
  {
    id: 3,
    term: "defer",
    definition: "Schedules a function to run after the current one ends.",
  },
  {
    id: 4,
    term: "struct",
    definition: "Custom data type that groups related fields.",
  },
  {
    id: 5,
    term: "interface",
    definition: "Defines method sets for polymorphic behavior.",
  },
  {
    id: 6,
    term: "slice",
    definition: "Dynamic, flexible view into an array.",
  },
  {
    id: 7,
    term: "go keyword",
    definition: "Starts a new goroutine.",
  },
  {
    id: 8,
    term: "map",
    definition: "Unordered key-value store.",
  },
  {
    id: 9,
    term: "package",
    definition: "Unit of code organization in Go.",
  },
  {
    id: 10,
    term: "make",
    definition: "Initializes slices, maps, or channels.",
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
