import Image from "next/image";

export default function BuiltForLifetimeSection() {
  return (
    <section className="py-5 mt-lg-4">
      <div className="container">
        {/* Image Row */}
        <div className="row g-3 align-items-end">
          <div className="col-4 col-md-3">
            <Image
              src="/home/built-lifetime/lfe-image.webp"
              alt="Outdoor space"
              width={300}
              height={380}
              className="img-fluid w-100"
            />
          </div>

          <div className="col-4 col-md-3">
            <Image
              src="/home/built-lifetime/lfe-image2.webp"
              alt="Stone pattern"
              width={300}
              height={380}
              className="img-fluid w-100"
            />
          </div>

          <div className="col-4 col-md-3">
            <Image
              src="/home/built-lifetime/lfe-image3.webp"
              alt="Stone wall"
              width={300}
              height={380}
              className="img-fluid w-100"
            />
          </div>

          <div className="col-4 col-md-3 d-none d-md-block">
            <Image
              src="/home/built-lifetime/lfe-image4.webp"
              alt="Modern wall"
              width={300}
              height={380}
              className="img-fluid w-100"
            />
          </div>
        </div>

        {/* Content */}
        <div className="row align-items-center mt-4">
          <div className="col-md-6 col-lg-9">
            <h2 className="hx1 fw-medium mb-0">
              Built For A Lifetime
            </h2>
          </div>

          <div className="col-md-6 col-lg-3">
            <p className="mb-0 small">
              Modern Stonework Crafted For Everyday Spaces, Engineered For Strength And Timeless Appeal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}