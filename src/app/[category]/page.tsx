"use client";

import { useParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Image from "next/image";
import StoneFeatureSection from "../../components/categories/_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection";
import ProductsGrid from "@/components/categories/ProductsGrid";
import ProductPhotos from "@/components/products/ProductPhotos";
import { useCategory } from "@/hooks/useCategory";
import { categoryTitle } from "@/lib/utils";
import GridCardSkeleton from "../../components/ui/GridCardSkeleton";
import "./style.scss";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.category as string;
  console.log("Category:", slug);

  const { data: category, isLoading, error } = useCategory(slug);

  console.log("category:", category);

  const title = categoryTitle(slug);

  if (error) {
    return (
      <section className="py-5 text-center">
        <div className="container">
          <h3>Something went wrong</h3>
          <p>Unable to load products right now.</p>
          <Button label="Retry" href={`/${slug}`} variant="black" rounded />
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-9">
              <Image
                src={`${category?.banner_image ?? "placeholder.png"}`}
                alt={title}
                width={773}
                height={393}
                className="w-100 h-auto"
              />
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="h1 mb-4 mb-md-0">{category?.title ?? ""}</h1>
            </div>

            <div className="col-md-4 text-end">
              <Button
                href="/get-quote"
                label="Get quote"
                variant="black"
                rounded
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* OVERVIEW */}
      <section className="py-5 overview-section">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-2 mb-3 mb-lg-0">
              <small className="badge-text badge-primary d-block mb-4">
                Overview
              </small>
            </div>

            <div className="col-lg-6 mb-4 mb-lg-0 pe-md-4 pe-lg-5">
              <h2 className="h3 mb-3 mb-md-0 pe-lg-5">
                <div
                  dangerouslySetInnerHTML={{
                    __html: (category?.overview || "").replace(
                      /<\/?p[^>]*>/g,
                      "",
                    ),
                  }}
                />
              </h2>
            </div>

            <div className="col-lg-4">
              <p>{category?.subtitle ?? ""}</p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* PRODUCT SPECS */}
      <section className="py-5 product-specs">
        <div className="container">
          <div className="d-grid grid-col-5">
            {category?.specs.map((spec, index) => (
              <div key={index} className="col">
                <h3 className="text-uppercase text-muted text-small mb-4">
                  {spec.title}
                </h3>
                <p className="text-small">{spec.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductPhotos images={category?.gallery ?? []} />

      <hr />

      {/* COLLECTIONS */}
      <section className="pt-5 collections-block">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <small className="badge-text badge-primary d-block mb-4">
                {category?.collections_title ?? "Collections"}
              </small>

              <h2 className="h1 mb-0">
                {category?.collections_description ?? ""}
              </h2>
            </div>

            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <Button
                href="/get-quote"
                label="Get quote"
                variant="black"
                rounded
              />
            </div>
          </div>

          <div className="collection-items">
            <hr className="my-5" />

            {isLoading ? (
              <GridCardSkeleton />
            ) : (
              <ProductsGrid items={category?.products ?? []} />
            )}
          </div>
        </div>
      </section>

      <StoneFeatureSection brochures={category?.brochures} />

      <FaqSection items={category?.faqs ?? []} />
    </>
  );
}
