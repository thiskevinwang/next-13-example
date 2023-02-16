import Link from "next/link";

export default async function Page() {
  const { nanoid } = await import(
    // @ts-ignore
    "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js"
  );

  const ids = Array.from({ length: 20 }, () => nanoid(20));

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {ids.map((id) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>blog/{id}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
