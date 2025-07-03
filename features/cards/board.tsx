import { Deck } from "./deck";
import { useState } from "react";

const Cards = [
  {
    id: "1",
    rotation: 5,
  },
  {
    id: "2",
    rotation: -7,
  },
  {
    id: "3",
    rotation: 5,
  },
  {
    id: "4",
    rotation: -7,
  },
  {
    id: "5",
    rotation: 5,
  },
  {
    id: "6",
    rotation: -7,
  },
];

export function Board() {
  const [deck, setDeck] = useState(Cards);

  function putToBack() {
    if (deck.length > 1) {
      const topCard = deck[0];
      const rest = deck.slice(1, deck.length);
      setDeck([...rest, topCard]);
    }
  }

  // const moveToEnd = (from) => {
  //   setCards(move(cards, from, cards.length - 1));
  // };

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4"></header>
      <Deck deck={deck} handleSwipe={putToBack} />
    </section>
  );
}
