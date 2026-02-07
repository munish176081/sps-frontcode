import Button from "@/components/ui/Button";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <section className="product-hero py-4 py-md-5">
      <div className="container">
        <h1 className="display-5 fw-semibold text-capitalize">
          {slug.replace("-", " ")}
        </h1>

        <Button
          label="Get quote"
          href="/contact"
          variant="black"
          rounded
        />
      </div>
    </section>
  );
}
