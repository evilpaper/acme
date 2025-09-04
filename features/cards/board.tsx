"use client";

import { Button } from "@/components/ui/button";
import { Deck } from "./deck";
import { Icons } from "@/components/ui/icons";
import type { Card as CardType } from "./data/types";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { CardRef } from "./card";

interface Props {
  cards: CardType[];
  name: string;
}

export function Board({ cards, name }: Props) {
  const [currentCard, setCurrentCard] = useState(0);
  const [buttonScales, setButtonScales] = useState({ left: 1, right: 1 });
  const topCardRef = useRef<CardRef>(null);

  const handleFlipClick = () => {
    if (topCardRef.current) {
      topCardRef.current.flip();
    }
  };

  return (
    <section className="w-[min(100%,320px)] mx-auto flex flex-col items-center justify-center gap-10 z-10">
      <Progress
        className="w-[80%]"
        value={(currentCard / cards.length) * 100}
      />
      <Deck
        ref={topCardRef}
        cards={cards}
        name={name}
        onCardSwipe={() => setCurrentCard((prev) => prev + 1)}
        onButtonScaleChange={setButtonScales}
      />
      <div
        id="actions"
        className="flex items-center justify-center w-full gap-4 relative z-10"
      >
        <motion.div style={{ scale: buttonScales.left }}>
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
          onClick={handleFlipClick}
        >
          Flip
        </Button>
        <motion.div style={{ scale: buttonScales.right }}>
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
