import Link from "next/link";

const filename = import.meta.url;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <nav>
        app/layout.tsx
        <div>
          <ul>
            Pokemon
            <li>
              <Link href="/pokemon">pokemon</Link>
            </li>
          </ul>
          <ul>
            Shop
            <li>
              <Link href="/account">account</Link>
            </li>
          </ul>
          <ul>
            Marketing
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </html>
  );
}
