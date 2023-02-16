import Link from "next/link";
import { nanoid } from "nanoid";

export default async function Page() {
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
