import Image from "next/image";

const LIFETIME_IMAGES = [
  {
    src: "/home/built-lifetime/lfe-image.webp",
    alt: "Outdoor space",
  },
  {
    src: "/home/built-lifetime/lfe-image2.webp",
    alt: "Stone pattern",
  },
  {
    src: "/home/built-lifetime/lfe-image3.webp",
    alt: "Stone wall",
  },
  {
    src: "/home/built-lifetime/lfe-image4.webp",
    alt: "Modern wall",
    hideOnMobile: true, // 👈 special case
  },
];


export default function WallingPhotos() {
  return (
    <section className="py-0 pb-5 mt-lg-4">
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