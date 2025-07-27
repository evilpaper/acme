import { BoardScreen } from "@/features/cards/board-screen";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  return <BoardScreen slug={slug} />;
}
