import Image from "next/image";
import './style.scss';
type Props = {
  images: string[];
};

export default function ProductPhotos({ images }: Props) {
  return (
    <section className="pt-0 pb-4 pb-md-5 mt-lg-4 categoires_photos">
      <div className="container">
        <div className="row g-3 align-items-start">
          {images.map((img, index) => (
            <div key={index} className="col-4 col-md-3">
              <Image
                src={img}
                alt="Product"
                width={409}
                height={287}
                className="w-100 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
