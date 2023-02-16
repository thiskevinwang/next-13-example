const filename = import.meta.url;

export default function ShopLayout({
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
