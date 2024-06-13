export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  return <p>I am customer edit page</p>;
}
