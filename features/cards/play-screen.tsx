import { Board } from "./board";

export function PlayScreen({ slug }: { slug: string }) {
  return <Board slug={slug} />;
}
