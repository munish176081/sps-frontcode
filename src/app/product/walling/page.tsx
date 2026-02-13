import Button from "@/components/ui/Button";
import Image from "next/image";
import StoneFeatureSection from "../_components/StoneFeatureSection";
import FaqSection from "@/components/ui/FaqSection";
import Link from "next/link";
import ProductGallery from "../_components/ProductGallery";
import './style.scss';

const PRODUCT_IMAGES = [
  "/products/walling-banner-pic.webp",
  "/products/walling-banner-pic.webp",
  "/products/walling-banner-pic.webp",
  "/products/walling-banner-pic.webp",
  "/products/walling-banner-pic.webp",
  "/products/walling-banner-pic.webp",
];

export default function ProductLanding() {
  return (
    <>

      <section className="page-header mt-0 mt-md-5 mb-4 pt-4 pt-md-5 pb-md-4">
        <div className="container">
          <div className="row align-items-end g-3">
            <Link href="/">
              <svg className="me-4" width="31" height="14" viewBox="0 0 31 14" fill="none">
                <path d="M6.94531 12.5L1.38976 6.94445L6.94531 1.38889" stroke="#757575" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.167 6.94443L1.38921 6.94443" stroke="#757575" strokeWidth="2.77778" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to paving collections
            </Link>
            <div className="col-md-8">
              <h1 className="h1 page-title mb-0">Bluestone</h1>
            </div>
            <div className="col-md-4 text-md-end">
              <Button href="/get-quote" rounded size="md" label="Get quote" variant="black" />
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
              <select className="form-select rounded-0 border">
                <option>Honed Bluestone</option>
                <option>Flamed Bluestone</option>
                <option>Sawn Bluestone</option>
              </select>
            </div>
          </div>

          {/* Content Row */}
          <div className="row">

            <div className="col-lg-8 pe-md-5">

              <div className="h3 fw-normal">
                <p>
                  Honed Bluestone delivers a smooth, elegant finish with
                  consistent blue-grey tones that suit both contemporary and
                  traditional spaces.
                </p>

                <p>
                  Its refined appearance makes it ideal for interiors, alfresco
                  areas, courtyards, and poolside designs where a softer texture
                  is preferred without sacrificing durability.
                </p>
              </div>
            </div>

            {/* RIGHT SMALL TEXT */}
            <div className="col-lg-4 mt-4 mt-lg-0">
              <p className="small text-muted">
                This versatile stone brings a sleek, architectural feel to both indoor floors and outdoor surfaces, offering a polished aesthetic that enhances the flow between indoor and outdoor environments.
              </p>
            </div>

          </div>

          <ProductGallery images={PRODUCT_IMAGES} />

        </div>
      </section>

      <hr />

      <section className="py-4 py-md-5 sizes-section">
        <div className="container">
          <div className="row align-items-start">

            {/* LEFT TITLE */}
            <div className="col-md-6 col-lg-5">
              <h3 className="h2 mb-0">
                Available Sizes for <br className="d-none d-md-block"/>
                Honed Bluestone
              </h3>
            </div>

            {/* RIGHT LIST */}
            <div className="col-md-6 col-lg-7 text-md-end">
              <ul className="sizes-list ms-auto mb-0 d-inline-block text-md-start">
                <li>800 × 400 × 20 mm</li>
                <li>800 × 400 × 30 mm</li>
                <li>600 × 300 × 20 mm</li>
                <li>Honed crazy paving: 20 mm thick</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <hr />

      <section className="py-4 py-md-5 sizes-section">
        <div className="container">
          <div className="row align-items-start">

            {/* LEFT TITLE */}
            <div className="col-md-6 col-lg-5">
              <h3 className="h2 mb-0">
                Coping (bullnose)
              </h3>
            </div>

            {/* RIGHT LIST */}
            <div className="col-md-6 col-lg-7 text-md-end">
              <ul className="sizes-list ms-auto mb-0 d-inline-block text-md-start">
                <li>600 × 300 × 30 mm</li>
                <li>800 × 400 × 30 mm</li>
                <li>1000 × 500 × 30 mm</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <hr />
     
      <section className="py-4 py-md-5 sizes-section">
        <div className="container">
          <div className="row align-items-start">

            {/* LEFT TITLE */}
            <div className="col-md-6 col-lg-5">
              <h3 className="h2 mb-0">
                Coping (drop down):
              </h3>
            </div>

            {/* RIGHT LIST */}
            <div className="col-md-6 col-lg-7 text-md-end">
              <ul className="sizes-list ms-auto mb-0 d-inline-block text-md-start">
                <li>600 × 350 × 20/40 mm</li>
                <li>600 × 350 × 30/80 mm</li>
                <li>800 × 400 × 20/50 mm</li>
                <li>800 × 400 × 30/80 mm</li>
                <li>1000 × 250 × 30/60 mm</li>
                <li>1000 × 350 × 30/80 mm</li>
                <li>1005 × 500 × 30/80 mm</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <StoneFeatureSection />

      <FaqSection />


    </>
  );
}
