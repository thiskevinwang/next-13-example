const filename = import.meta.url;

export default function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <aside>{filename}</aside>
      {children}
    </section>
  );
}
