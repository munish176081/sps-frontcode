export default function CategoryDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-5">
      <h1>Category Details</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}