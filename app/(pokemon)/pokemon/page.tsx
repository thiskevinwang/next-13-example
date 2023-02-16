import Link from "next/link";

export default async function PokemonRootPage({}: {}) {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
    res.json()
  );
  const names = data.results.map((result: { name: string }) => result.name);
  return (
    <main>
      <h1>Pokemon</h1>
      <ol>
        {names.map((name: string) => (
          <li key={name}>
            <Link href={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
