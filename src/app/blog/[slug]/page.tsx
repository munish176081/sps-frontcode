export default function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-5">
      <h1>Blog Details</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}