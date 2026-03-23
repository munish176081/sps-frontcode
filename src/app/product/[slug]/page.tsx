"use client";

import React from "react";
import Button from "@/components/ui/Button";
import StoneFeatureSection from "../_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection";
import BackToPage from "@/components/ui/BackToPage";
import { formatSlug } from "@/lib/utils";
import ProductGallery from "../_components/ProductGallery";
import "../style.scss";
import { useProduct } from "@/hooks/useProducts";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import type { SingleValue } from "react-select";

export default function ProductDetails() {
  const params = useParams();

  const Select = dynamic(() => import("react-select"), { ssr: false });

  const router = useRouter();

  const slug = params.slug as string;
  const { data: product, isLoading, isError } = useProduct(slug);

  if (isLoading) {
    return (
      <section className="py-5 text-center">
        <div className="container">
          <h3>Loading product details...</h3>
        </div>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="py-5 text-center">
        <div className="container">
          <h3>Something went wrong</h3>
          <p>Unable to load product details right now.</p>
          <BackToPage />
        </div>
      </section>
    );
  }

  console.log("Product details:", product);

  type Option = {
    value: string;
    label: string;
  };

  const options: Option[] =
    product?.category_products?.map((item) => ({
      value: item.slug,
      label: item.title,
    })) ?? [];

  const groupedSpecs = product?.sizes?.reduce(
    (acc: Record<string, string[]>, item) => {
      if (!acc[item.section]) {
        acc[item.section] = [];
      }
      acc[item.section].push(item.value);
      return acc;
    },
    {},
  );

  return (
    <>
      <section className="page-header mt-0 mt-md-5 mb-4 pt-4 pt-md-5 pb-md-4">
        <div className="container">
          <div className="row align-items-end g-3">
            <BackToPage />
            <div className="col-md-8">
              <h1 className="h1 page-title mb-0">{formatSlug(slug)}</h1>
            </div>
            <div className="col-md-4 text-md-end">
              <Button
                href="/get-quote"
                rounded
                size="md"
                label="Get quote"
                variant="black"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="py-4 product-description">
        <div className="container">
          {/* Dropdown */}
          <div className="row mb-4">
            <div className="col-md-4 col-lg-3">
              <Select
                options={options}
                placeholder="Search other products..."
                onChange={(newValue) => {
                  const option = newValue as SingleValue<Option>;

                  if (option?.value) {
                    router.push(`/product/${option.value}`);
                  }
                }}
                className="react-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          {/* Gallery */}
          <ProductGallery images={product?.gallery || []} />
          
          <hr />
          
          {/* Content Row */}
          <div className="row">
            <div className="col-lg-12 pe-md-5">
              <div
                className="h3 fw-normal"
                dangerouslySetInnerHTML={{
                  __html: product?.description || "",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* SIZES */}
      {groupedSpecs &&
        Object.entries(groupedSpecs).map(([section, values], index, array) => (
          <React.Fragment key={section}>
            <section className="py-4 py-md-5 sizes-section">
              <div className="container">
                <div className="row align-items-start">
                  {/* LEFT TITLE - Uses the Section Name from DB */}
                  <div className="col-md-6 col-lg-5">
                    <h3 className="h2 mb-0">
                      {section === "Random sizes" ? (
                        <>
                          Available Sizes for{" "}
                          <br className="d-none d-md-block" /> {product?.title}
                        </>
                      ) : (
                        section
                      )}
                    </h3>
                  </div>

                  {/* RIGHT LIST - Loops the values for this section */}
                  <div className="col-md-6 col-lg-7 text-md-end">
                    <ul className="sizes-list ms-auto mb-0 d-inline-block text-md-start">
                      {values.map((val, idx) => (
                        <li key={idx}>{val}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <hr />
          </React.Fragment>
        ))}

      <StoneFeatureSection />

      <FaqSection items={product?.faqs || []} />
    </>
  );
}
