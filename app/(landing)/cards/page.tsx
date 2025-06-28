import { CardsScreen } from "@/features/cards/cards-screen";

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

const cards = [
  {
    id: "8d22b780-1b06-4c90-8e54-d91812f55cc0",
    name: "JavaScript 101",
    slug: "javascript-101",
    description:
      "A bunch of JavaScript questions taken from MDN and JavaScript Info.",
  },
];

export default async function Page() {
  return <CardsScreen cards={cards} />;
}
