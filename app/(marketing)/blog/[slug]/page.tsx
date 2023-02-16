export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <h1>Blog</h1>
      <h2>params.slug: {params.slug}</h2>
    </main>
  );
}
