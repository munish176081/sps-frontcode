import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import StoneFeatureSection from "../../components/categories/_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection"; 
import WallingPhotos from "../../components/categories/_components/wallling-photos"; 
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import { PRODUCT_CATEGORIES } from "@/data/product";
import '../walling/style.scss';
 
export default function ProductLanding() {
  return (
    <>
      <section className="py-5">
        <div className="container">

          {/* Walling Card */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-7">
              <Image
                src="/products/brick/brick-banner.webp"
                alt="Walling"
                width={773}
                height={393}
                className="w-100 h-auto"
              />
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="h1 mb-4 mb-md-0">Create Timeless Surfaces With Our Reclaimed Bricks</h1>
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
                Sustainably reclaimed and crafted for enduring character — our reclaimed bricks bring authentic patina and historic texture to outdoor and interior projects.
              </h2>
            </div>

            <div className="col-lg-4">
              <p>
                Whether used for courtyards, pathways, fire pits or feature floors, reclaimed brick adds warmth, depth and a unique story to every surface.
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
              <p className="text-small">Pedestrian & light residential use (suitable for heavier use with appropriate base)</p>
            </div>

            {/* Compliance */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Compliance
              </h3>
              <p className="text-small">Reclaimed materials inspected & graded to industry standards</p>
            </div>

            {/* Suitable For */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Suitable For
              </h3>
              <p className="text-small">Patios · <br/>Pathways ·<br/> Courtyards ·<br/> Internal feature floors ·<br/> Garden edging</p>
            </div>

            {/* Materials */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Materials
              </h3>
              <p className="text-small">100% reclaimed brick </p>
              <p className="text-small">Recycled & repurposed</p>
            </div>

            {/* Finish & Formats */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Finish & Formats
              </h3>
              <p className="text-small">Hand-aged finish · Multiple sizes · Laid stretcher, herringbone, basketweave</p>
            </div>

          </div>
        </div>
      </section>

      <WallingPhotos />

      <hr />

      <section className="py-5 paving-collections">
        <div className="container">

          {/* Top Row */}
          <div className="row align-items-end mb-4">
            <div className="col-lg-8">
              <small className="badge-text badge-primary d-block mb-4">Collections</small>
              <h2 className="h1 mb-0">
                Browse Our Reclaimed <br /> Brick Collections
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

          <hr />

          <div className="row align-items-start pt-4">

            <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
              <h3 className="h3 mb-3">Ashbury Brick</h3>
              <Link href="/product/walling" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none">
                  <path d="M1.38892 6.94458L6.94447 1.38903L12.5 6.94458" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94458 29.1667L6.94458 1.38897" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Ashbury Brick features classic red hues with subtle weathering, offering warmth and traditional character. Aged 80–120 years, it’s well suited to feature walls, fireplaces, and garden pathways. Each brick measures 240 × 115 × 50 mm, with 532 bricks per crate, weighing approximately 2.5 kg per unit.
              </p>
            </div>

          </div>
        </div>
      </section>

      <hr className="py-3 m-0" />

      <CategoriesGrid
        category="brick"
        items={PRODUCT_CATEGORIES.brick}
      />

      <section className="py-5 paving-collections">
        <div className="container">

          <div className="row align-items-start pt-4">

            <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
              <h3 className="h3 mb-3">Clayburn Brick</h3>
              <Link href="#" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 23.6108L6.94444 29.1664L1.38889 23.6108" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94434 1.38867L6.94433 29.1665" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Clayburn Brick showcases rich red and earthy tones with an authentic aged surface. Also dating back 80–120 years, it is ideal for cladding, fireplace surrounds, and outdoor paving. Bricks measure 240 × 115 × 50 mm, supplied at 532 bricks per crate, with an approximate weight of 2.5 kg each.
              </p>
            </div>

          </div>

        </div>

      </section>

      <hr className="py-0 m-0" />

      <section className="py-5 paving-collections">
        <div className="container">

          <div className="row align-items-start pt-4">

            <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
              <h3 className="h3 mb-3">Sunset Ridge Brick</h3>
              <Link href="#" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 23.6108L6.94444 29.1664L1.38889 23.6108" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94434 1.38867L6.94433 29.1665" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Sunset Ridge Brick is defined by its warm, sun-toned colouring and rugged texture, making it ideal for bold architectural statements. Heavier and thicker than standard reclaimed bricks, it suits structural façades, fire pits, and statement walls. Each brick measures 240 × 115 × 65 mm, with 420 bricks per crate, weighing approximately 3.5 kg per brick.
              </p>
            </div>

          </div>

        </div>
      </section>
      
      <hr className="py-0 m-0" />

      <section className="py-5 paving-collections">
        <div className="container">

          <div className="row align-items-start pt-4">

            <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
              <h3 className="h3 mb-3">Midnight Ash Brick</h3>
              <Link href="#" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 23.6108L6.94444 29.1664L1.38889 23.6108" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94434 1.38867L6.94433 29.1665" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Midnight Ash Brick offers a modern, industrial aesthetic with deep charcoal and black tones. Perfect for contemporary façades and refined interior feature walls, this reclaimed brick brings a sleek edge to any design. Bricks measure 240 × 115 × 50 mm, supplied at 532 bricks per crate, with an approximate weight of 2.5 kg per unit.
              </p>
            </div>

          </div>

        </div>
      </section>

      <hr className="py-0 m-0" />

      <StoneFeatureSection />

      <FaqSection />

    </>
  );
}
