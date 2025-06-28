import { CardDeckScreen } from "@/features/cards/card-deck-screen";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return <CardDeckScreen />;
}
