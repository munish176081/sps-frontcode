import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProductPhotos({ images }: Props) {
  return (
    <section className="py-0 pb-5 mt-lg-4">
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
