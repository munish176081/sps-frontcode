import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

type Props = {
  items: Product[];
};

export default function ProductsGrid({ items }: Props) {
  if (!items?.length) {
    return (
      <div className="text-center py-5">
        <div className="mx-auto" style={{ maxWidth: "520px" }}>
          
          <div className="mb-3">
            <i className="bi bi-box-seam display-4 text-muted"></i>
          </div>

          <h4 className="fw-semibold mb-2">No products available</h4>

          <p className="text-muted mb-4">
            We’re currently updating this collection. Please explore other
            categories while we add new products.
          </p>

          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Link href="/walling" className="btn btn-outline-dark btn-sm">
              Walling
            </Link>

            <Link href="/paving" className="btn btn-outline-dark btn-sm">
              Paving
            </Link>

            <Link href="/brick" className="btn btn-outline-dark btn-sm">
              Brick
            </Link>
          </div>

          <div className="mt-4">
            <Link href="/" className="btn btn-dark btn-sm">
              Back to Home
            </Link>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="pb-3 pt-0">
      <div className="row g-4">
        {items.map((item) => (
          <div
            key={item.id ?? item.slug}
            className="col-6 col-md-4 col-lg-3 position-relative mb-4 mt-0"
          >
            <Link href={`/product/${item.slug}`} className="d-block">
              <h3 className="h5 mb-md-3 mb-3 d-inline-block collection-title">
                {item.title}
              </h3>

              <div className="collection_pic">
                <Image
                  src={item.main_image ?? '/images/placeholder.png'}
                  alt={item.title}
                  width={348}
                  height={508}
                  loading="lazy"
                  className="w-100 h-auto"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}