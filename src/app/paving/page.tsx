import Button from "@/components/ui/Button";
import Image from "next/image";
import StoneFeatureSection from "../../components/categories/_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection"; 
import Link from "next/link";  
import CategoriesGrid from "@/components/categories/CategoriesGrid";
import { PRODUCT_CATEGORIES } from "@/data/product";
import '../walling/style.scss';
import ProductPhotos from "@/components/products/ProductPhotos";
import { PRODUCT_PHOTOS } from "@/data/productPhotos";
 
export default function ProductLanding() {
  return (
    <>
      <section className="py-5">
        <div className="container">

          {/* Paving Card */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 col-md-9">
              <Image
                src="/products/paving/paving-banner.webp"
                alt="Walling"
                width={773}
                height={393}
                className="w-100 h-auto"
              />
            </div>
          </div>

          <div className="row align-items-end">
            <div className="col-md-8">
              <h1 className="h1 mb-4 mb-md-0">Rreate Stunning Outdoor Spaces With Our Natural Stone Paving</h1>
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
                Sustainably Sourced And Designed With Contemporary Architecture In Mind — Our Natural Stone Paving Brings Character, Strength, And Timeless Beauty To Every Outdoor Setting.
              </h2>
            </div>

            <div className="col-lg-4">
              <p>
                Whether used in courtyards, patios, pool surrounds or pathways, our paving proves that outdoor surfaces don’t have to be ordinary.
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
              <p className="text-small">Pedestrian & light <br/> residential use (Driveway suitable on approved base)</p>
            </div>

            {/* Compliance */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Compliance
              </h3>
              <p className="text-small">Industry standard stone supply Sustainably sourced materials Low VOC impact</p>
            </div>

            {/* Suitable For */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Suitable For
              </h3>
              <p className="text-small">Outdoor Areas</p>
              <p className="text-small">Pool surrounds</p>
              <p className="text-small">Courtyards</p>
              <p className="text-small">Pathways</p>
              <p className="text-small">Patios</p>
            </div>

            {/* Materials */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Materials
              </h3>
              <p className="text-small">100% Natural Stone</p>
              <p className="text-small">Sustainably sourced</p>
              <p className="text-small">Weather-resistant</p>
            </div>

            {/* Finish & Formats */}
            <div className="col">
              <h3 className="text-uppercase text-muted text-small mb-4">
                Finish & Formats
              </h3>
              <p className="text-small">Natural cleft <br/>
                Sawn & textured<br/>
                Custom options available
              </p>
            </div>

          </div>
        </div>
      </section>

      <WallingPhotos />

      <ProductPhotos images={PRODUCT_PHOTOS.paving} />

      <hr />

      <section className="py-5 paving-collections">
        <div className="container">

          {/* Top Row */}
          <div className="row align-items-end mb-4">
            <div className="col-lg-8">
              <small className="badge-text badge-primary d-block mb-4">Collections</small>
              <h2 className="h1 mb-0">
                Browse Our Paving <br /> Collections
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
              <h3 className="h3 mb-3">Stone Paving</h3>
              <Link href="/product/walling" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none">
                  <path d="M1.38892 6.94458L6.94447 1.38903L12.5 6.94458" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94458 29.1667L6.94458 1.38897" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Natural stone paving consists of durable stone slabs with organic variation in colour and texture. Ideal for pathways, patios, pool surrounds, courtyards and outdoor entertaining areas. Thickness varies between 30–40mm. Substrates must be prepared to support the stone and ensure proper drainage.
              </p>
            </div>

          </div>

        </div>
      </section>

      <hr className="py-3 m-0" />

      <CategoriesGrid
        category="paving"
        items={PRODUCT_CATEGORIES.paving}
      />

      <section className="py-5 paving-collections">
        <div className="container">

          <div className="row align-items-start pt-4">

            <div className="col-lg-4 d-flex flex-column align-items-start gap-3">
              <h3 className="h3 mb-3">Crazy Paving</h3>
              <Link href="#" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 23.6108L6.94444 29.1664L1.38889 23.6108" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94434 1.38867L6.94433 29.1665" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Crazy paving features irregular shaped stone pieces that create a natural, free-flowing pattern. Perfect for rustic landscapes, garden paths and feature paving. Each piece varies in size and is typically 30–40mm thick. Installed using mortar and grout depending on the design preference.
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
              <h3 className="h3 mb-3">Large Format Paving</h3>
              <Link href="#" className="btn-circle rounded-circle d-flex align-items-center justify-content-center">
                <svg width="14" height="31" viewBox="0 0 14 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 23.6108L6.94444 29.1664L1.38889 23.6108" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.94434 1.38867L6.94433 29.1665" stroke="black" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="col-lg-8">
              <p className="mb-0 text-muted">
                Large format pavers are cut in clean rectangular or square slabs for a modern, architectural finish. Ideal for minimalist designs, courtyards and commercial settings. Thickness ranges between 30–40mm. Substrate must support approximately 80–90kg per m², depending on the stone type used.
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
