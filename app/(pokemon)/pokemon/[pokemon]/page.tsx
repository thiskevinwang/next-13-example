export default async function Page({
  params,
}: {
  params: { pokemon: string };
}) {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemon}`
  ).then((res) => res.json());

  return (
    <main>
      <h1>Pokemon</h1>
      <h2>params.pokemon: {params.pokemon}</h2>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
}
