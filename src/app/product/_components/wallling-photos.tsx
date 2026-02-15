import Image from "next/image";

export default function WallingPhotos() {
  return (
    <section className="py-0 pb-5 mt-lg-4 categoirs-photos">
      <div className="container">
        {/* Image Row */}
        <div className="row g-3 align-items-start">
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
 
      </div>
    </section>
  );
}