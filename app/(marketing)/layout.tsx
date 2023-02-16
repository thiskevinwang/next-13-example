const filename = import.meta.url;

export default function MarketingLayout({
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
