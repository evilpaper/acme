import { Deck } from "./deck";

const CARDS = [
  {
    id: 1,
    front: "goroutine",
    back: "Lightweight thread managed by the Go runtime.",
  },
  {
    id: 2,
    front: "channel",
    back: "Pipe for goroutines to communicate and synchronize.",
  },
  {
    id: 3,
    front: "defer",
    back: "Schedules a function to run after the current one ends.",
  },
  {
    id: 4,
    front: "struct",
    back: "Custom data type that groups related fields.",
  },
  {
    id: 5,
    front: "interface",
    back: "Defines method sets for polymorphic behavior.",
  },
  {
    id: 6,
    front: "slice",
    back: "Dynamic, flexible view into an array.",
  },
  {
    id: 7,
    front: "go keyword",
    back: "Starts a new goroutine.",
  },
  {
    id: 8,
    front: "map",
    back: "Unordered key-value store.",
  },
  {
    id: 9,
    front: "package",
    back: "Unit of code organization in Go.",
  },
  {
    id: 10,
    front: "make",
    back: "Initializes slices, maps, or channels.",
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
