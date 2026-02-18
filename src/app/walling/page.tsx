"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Image from "next/image"; 
import StoneFeatureSection from "../../components/categories/_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection";
import { PRODUCT_CATEGORIES } from "@/data/product";
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import ProductPhotos from "@/components/products/ProductPhotos";
import { PRODUCT_PHOTOS } from "@/data/productPhotos";
import './style.scss';

export default function WallingPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const collections = [
    {
      title: "Ledge Stone",
      description:
        "Ledge stone is a linear profile made from individual rectangular pieces, ideal for piers, chimneys, feature walls, fireplaces, and retaining walls. Each piece is approximately 30 mm thick and varies in size, with a sawn back for simple, direct glue installation. Substrates must support a weight of around 75 kg per m².",
      category: "brick",
      items: PRODUCT_CATEGORIES.waling,
    },
    {
      title: "Freeform",
      description: "Our free form range features larger, irregular stones ideal for fireplaces, feature walls, and façades. Each piece is around 30 mm thick, can be installed grouted or dry-stacked, and includes a sawn back for easy glue installation. Substrates must support approximately 75 kg per m².",
      items: PRODUCT_CATEGORIES.waling,
    },
    {
      title: "Ashlar Pattern",
      description:
        "The Ashlar Pattern features rectangular, sawn-cut stones arranged to interlock in a refined layout, ideal for feature walls, fireplaces, retaining walls, and façades. Pieces are approximately 30–40 mm thick with varying sizes to create a structured yet natural look. Designed for direct glue installation, substrates must support around 80–90 kg per m² depending on the stone type.",
      category: "brick",
      items: PRODUCT_CATEGORIES.waling,
    },
  ];

  return (
    <>
      <section className="py-5">
        <div className="container">

          {/* Walling Card */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-9">
              <Image
                src="/products/walling-banner-pic.webp"
                alt="Walling"
                width={773}
                height={393}
                className="w-100 h-auto"
              />
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="h1 mb-4 mb-md-0">Create Stunning Features with Our Natural Stone Walling</h1>
            </div>
            <div className="col-md-4 text-end">
              <Button
                label="View Collection"
                href="/walling/"
                variant="black"
                rounded
              />
            </div>
          </div>

        </div>
      </section>

      <hr />

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
                Sustainably Sourced And Designed With Contemporary Architecture In Mind –
                Our Natural Stone Walling Is Proof That Boundary Walls Don’t Have To Be Ordinary.
              </h2>
            </div>

            <div className="col-lg-4">
              <p>
                Crafted from premium natural stone and shaped by skilled hands, our walling solutions offer exceptional strength, texture, and visual impact. Built to withstand the elements, they require minimal maintenance while adding timeless character to any space.
              </p>
            </div>

          </div>
        </div>
      </section>

      <hr />

      <section className="py-5 product-specs">
        <div className="container">
          <div className="d-grid grid-col-5">

            {/* Load Class */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Load Class
              </h3>
              <p className="text-small">Walls — for architectural cladding, facades, feature walls, garden walls</p>
            </div>

            {/* Compliance */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Compliance
              </h3>
              <p className="text-small">Material sourced and processed to industry-recommended standards for natural stone wall cladding.</p>
            </div>

            {/* Suitable For */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Suitable For
              </h3>
              <p className="text-small">Indoor And Outdoor Walls</p>
            </div>

            {/* Materials */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Materials
              </h3>
              <p className="text-small">100% Natural Stone</p>
              <p className="text-small">Sustainably Sourced</p>
              <p className="text-small">Durable & Weather-Resistant</p>
            </div>

            {/* Finish & Formats */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Finish & Formats
              </h3>
              <p className="text-small">Indoor And Outdoor Walls, Facades, Boundary Walls,
                Feature Walls, Architectural Cladding, Landscape Walls
              </p>
            </div>

          </div>
        </div>
      </section>

      <ProductPhotos images={PRODUCT_PHOTOS.walling} />

      <hr />

      <section className="pt-5 collections-block">
        <div className="container">

          {/* Top Row */}
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <small className="badge-text badge-primary d-block mb-4">Collections</small>
              <h2 className="h1 mb-0">
                Browse our Walling <br /> Collections
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

          {collections.map((item, index) => (
            <div key={index} className="collection-items">

              <div className="row align-items-start">

                <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
                  <h3 className="h3 mb-2">{item.title}</h3>

                  <button
                    className={`btn-circle rounded-circle d-flex align-items-center justify-content-center ${activeIndex === index ? "active" : ""
                      }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 23.6111L6.94444 29.1666L1.38889 23.6111" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.94434 1.38892L6.94433 29.1667" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="col-lg-8">
                  <p className="mb-0 text-muted">{item.description}</p>
                </div>
              </div>

              <hr className="my-5" />

              {/* Accordion Content */}
              <div
                className={`accordion-content ${activeIndex === index ? "open" : ""
                  }`}
              >
                <CategoriesGrid
                  category="walling"
                  items={PRODUCT_CATEGORIES.walling}
                />
              </div>

            </div>
          ))}
        </div>
      </section>

      <StoneFeatureSection />

      <FaqSection />

    </>
  );
}
