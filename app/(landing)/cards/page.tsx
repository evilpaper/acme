import { CardsScreen } from "@/features/cards/cards-screen";
import { decks } from "@/features/cards/data/data";

export const metadata = {
  title: "Cards | ACME",
  description:
    "Solidify your knowledge with ACME's flashcards - Engage with our comprehensive collection of flashcards designed to enhance your learning experience.",
  keywords:
    "ACME flashcards, interactive flashcards, knowledge testing, educational flashcards, learning assessment",
  openGraph: {
    title: "Quizzes | ACME",
    description:
      "Solidify your knowledge with ACME's interactive flashcards - Engage with our comprehensive collection of flashcards designed to enhance your learning experience.",
    type: "website",
  },
};

export default async function Page() {
  return <CardsScreen decks={decks} />;
}
