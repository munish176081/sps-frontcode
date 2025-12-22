export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container py-5">
      <h1>Product Details</h1>
      <p>Slug: {params.slug}</p>
    </div>
  );
}
