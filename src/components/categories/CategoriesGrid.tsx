import Image from "next/image";
import Link from "next/link";
import { CategoryItem } from "../../data/product";

type Props = {
  category: string;
  items: CategoryItem[];
};

export default function CategoriesGrid({ items }: Props) {
  return (
    <div className="pb-3 pt-0">
      {/* <div className="container"> */}
        <div className="row g-4">
          {items.map((item) => (
            <div
              key={item.slug}
              className="col-6 col-md-4 col-lg-3 position-relative mb-4 mt-0"
            >
              <Link
                href={`/product/${item.slug}`}
                className="d-block"
              >
                <h3 className="h5 mb-md-3 mb-3 d-inline-block collection-title">
                  {item.title}
                </h3>
                <div className="collection_pic">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={348}
                    height={508}
                    className="w-100 h-auto"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>
  );
}
