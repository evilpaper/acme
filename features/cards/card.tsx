import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { Card as CardType } from "./data/types";

interface Props {
  card: CardType;
  handleSwipe: (id: number) => void;
  isOnTop: boolean;
  index: number;
  deckLength: number;
  deckName: string;
  deckSuite: string;
  setCardDrivenProps: Dispatch<
    SetStateAction<{
      buttonScaleBadAnswer: number;
      buttonScaleGoodAnswer: number;
    }>
  >;
}

/**
 * Distance threshold in pixels for card swipe detection.
 *
 * When a card is dragged horizontally or vertically:
 * - If dragged distance ≤ this threshold: card stays in place and can be flipped
 * - If dragged distance > this threshold: card is swiped to the back of the deck
 */
const SWIPE_THRESHOLD = 80;

export function Card({
  card,
  handleSwipe,
  isOnTop,
  index,
  deckLength,
  deckName,
  deckSuite,
  setCardDrivenProps,
}: Props) {
  const { id, prompt, answer } = card;
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useTransform(x, [-160, -76, 76, 160], [0, 1, 1, 0]);
  const dragRotation = useTransform(x, [-100, 100], [-10, 10]);

  const rotation = card.id % 2 ? 6 : -8;
  // 1. Initialize deck rotation motion value
  const deckRotation = useMotionValue(rotation);

  // 2. Combine deck rotation and drag rotation
  const rotate = useTransform([deckRotation, dragRotation], (values) => {
    const [deck, drag] = values as [number, number];
    return `${isOnTop ? deck + drag : deck}deg`;
  });

  let drivenActionLeftScale = useTransform(
    x,
    [SWIPE_THRESHOLD * -1, 0, SWIPE_THRESHOLD],
    [1.4, 1, 0.6],
  );
  let drivenActionRightScale = useTransform(
    x,
    [SWIPE_THRESHOLD * -1, 0, SWIPE_THRESHOLD],
    [0.6, 1, 1.4],
  );

  // Animate deckRotation to 0° when this card becomes the top card or,
  useEffect(() => {
    if (isOnTop) {
      // Animate to 0 with a spring
      animate(deckRotation, 0, { type: "spring", stiffness: 400, damping: 20 });
    } else {
      // Set to its default rotation when not on top
      deckRotation.set(rotation);
    }
  }, [isOnTop, rotation]);

  useMotionValueEvent(x, "change", (latest) => {
    //@ts-ignore
    setCardDrivenProps((state) => ({
      ...state,
      buttonScaleBadAnswer: drivenActionLeftScale,
      buttonScaleGoodAnswer: drivenActionRightScale,
    }));
  });

  function handleClick() {
    const isWithinThreshold = isDragWithinThreshold();
    if (isWithinThreshold && !isDragging) {
      setIsFlipped(!isFlipped);
    }
    setIsDragging(false);
  }

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragEnd() {
    const shouldSwipe = isDragBeyondThreshold();
    if (shouldSwipe) {
      handleSwipe(id);
      resetFlipState();
    }
    setIsDragging(false);
  }

  const isDragWithinThreshold = () => {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    return xDistance <= SWIPE_THRESHOLD && yDistance <= SWIPE_THRESHOLD;
  };

  const isDragBeyondThreshold = () => {
    const xDistance = Math.abs(x.get());
    const yDistance = Math.abs(y.get());
    return xDistance > SWIPE_THRESHOLD || yDistance > SWIPE_THRESHOLD;
  };

  const resetFlipState = () => {
    if (isFlipped) {
      setIsFlipped(false);
    }
  };

  return (
    <motion.div
      className="w-full h-full preserve-3d hover:cursor-grab active:cursor-grabbing origin-bottom touch-action: pan-y"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        y,
        rotate,
        transformPerspective: 1000,
      }}
      animate={{
        rotateY: isFlipped ? 180 : 0,
        rotate: isOnTop ? 0 : rotation,
        zIndex: deckLength - index,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 32,
      }}
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      dragElastic={0.9}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 50,
      }}
      onClick={handleClick}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <motion.div
        className="w-full h-full flex flex-col absolute backface-hidden"
        style={{
          opacity,
        }}
      >
        <div className="w-full h-full border-solid border-primary border-2 bg-card rounded-2xl flex items-start p-8 relative text-primary">
          <span className="absolute bottom-6 right-8 font-bold">{id}</span>
          <p className="text-2xl font-bold tracking-tight leading-[1.8rem]">
            {prompt}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="w-full h-full flex flex-col absolute backface-hidden rotate-y-180"
        style={{
          opacity,
        }}
      >
        <div className="w-full h-full border-solid border-primary border-2 bg-card rounded-2xl flex items-center justify-center p-8 pb-20 relative text-primary">
          <span className="absolute bottom-6 right-8 font-bold">{id}</span>
          <p className="text-2xl font-bold tracking-tight leading-[1.8rem] text-center">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
