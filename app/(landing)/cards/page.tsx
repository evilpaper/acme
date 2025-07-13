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
    name: "A Tour of Go - Chapter 1",
    slug: "a-tour-of-go-chapter-1",
    description: "A Tour of Go. Chapter 1 - Packages, variables and functions",
  },
];

export default async function Page() {
  return <CardsScreen cards={cards} />;
}
