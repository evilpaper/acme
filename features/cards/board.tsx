import { Deck } from "./deck";
import { useState } from "react";

const Cards = [
  {
    id: "1",
    rotation: 5,
    term: "goroutine",
    definition: "Lightweight thread managed by the Go runtime.",
  },
  {
    id: "2",
    rotation: -7,
    term: "channel",
    definition: "Pipe for goroutines to communicate and synchronize.",
  },
  {
    id: "3",
    rotation: 5,
    term: "defer",
    definition: "Schedules a function to run after the current one ends.",
  },
  {
    id: "4",
    rotation: -7,
    term: "struct",
    definition: "Custom data type that groups related fields.",
  },
  {
    id: "5",
    rotation: 5,
    term: "interface",
    definition: "Defines method sets for polymorphic behavior.",
  },
  {
    id: "6",
    rotation: -7,
    term: "slice",
    definition: "Dynamic, flexible view into an array.",
  },
  {
    id: "7",
    rotation: 5,
    term: "go keyword",
    definition: "Starts a new goroutine.",
  },
  {
    id: "8",
    rotation: -7,
    term: "map",
    definition: "Unordered key-value store.",
  },
  {
    id: "9",
    rotation: 5,
    term: "package",
    definition: "Unit of code organization in Go.",
  },
  {
    id: "10",
    rotation: -7,
    term: "make",
    definition: "Initializes slices, maps, or channels.",
  },
];

export function Board() {
  const [deck, setDeck] = useState(Cards);

  function moveToEnd() {
    if (deck.length > 1) {
      const topCard = deck[0];
      const rest = deck.slice(1, deck.length);
      setDeck([...rest, topCard]);
    }
  }

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck deck={deck} handleSwipe={moveToEnd} />
    </section>
  );
}
