"use client";

import { Button } from "@/components/ui/button";
import { Deck } from "./deck";
import { Icons } from "@/components/ui/icons";
import type { Card as CardType } from "./data/types";
import { useState } from "react";
import { motion } from "motion/react";
import { Progress } from "@/components/ui/progress";

interface Props {
  cards: CardType[];
  name: string;
  suite: string;
}

const initialDrivenProps = {
  buttonScaleBadAnswer: 1,
  buttonScaleGoodAnswer: 1,
};

export function Board({ cards, name, suite }: Props) {
  const [cardDrivenProps, setCardDrivenProps] = useState(initialDrivenProps);
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10">
      <header className="w-[80%] flex flex-col items-center justify-center gap-4">
        <Progress value={(currentCard / cards.length) * 100} />
      </header>
      <Deck
        cards={cards}
        name={name}
        suite={suite}
        setCardDrivenProps={setCardDrivenProps}
        setCurrentCard={setCurrentCard}
      />
      <div
        id="actions"
        className="flex items-center justify-center w-full gap-4 relative z-10"
      >
        <motion.div style={{ scale: cardDrivenProps.buttonScaleBadAnswer }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary border-2"
          >
            <Icons.close />
          </Button>
        </motion.div>
        <Button
          variant="outline"
          className="rounded-full border-primary border-2 font-bold"
        >
          Flip
        </Button>
        <motion.div style={{ scale: cardDrivenProps.buttonScaleGoodAnswer }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary border-2"
          >
            <Icons.check />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
