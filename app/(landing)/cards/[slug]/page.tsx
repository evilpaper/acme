import { PlayScreen } from "@/features/cards/play-screen";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <PlayScreen slug={slug} />;
}
