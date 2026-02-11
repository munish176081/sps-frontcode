import Image from "next/image";
import Link from "next/link";

const WALLING_COLLECTIONS = [
    {
        title: "Hotham",
        slug: "hotham",
        image: "/products/walling/Hotham-thumb.webp",
    },
    {
        title: "Blue Ridge",
        slug: "blue-ridge",
        image: "/home/what-we-offer/offer2.webp",
    },
    {
        title: "Kakadu",
        slug: "kakadu",
        image: "/home/what-we-offer/offer3.webp",
    },
    {
        title: "Wyndham",
        slug: "wyndham",
        image: "/home/what-we-offer/offer4.webp",
    },
    {
        title: "Grange",
        slug: "grange",
        image: "/home/what-we-offer/offer5.webp",
    },
];

export default function WallingCategories() {
    return (
        <section className="py-3">
            <div className="container">

                {/* Grid */}
                <div className="row g-4">
                    {WALLING_COLLECTIONS.map((item) => (
                        <div
                            key={item.slug}
                            className="col-6 col-md-4 col-lg-3 position-relative offer-box"
                        >
                            <Link
                                href={`/product/walling/${item.slug}`}
                                className="d-block position-relative"
                            >

                                {/* Title Over Image */}
                                <span className="collection-title">
                                    <h3 className="h5 mb-4 d-inline-block">{item.title} 
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#icon-arrow-top-right-a)">
                                                <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                            </g>
                                        </svg>
                                    </h3> 
                                </span>

                                {/* Image */}
                                <div className="collection_pic">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={348}
                                        height={508}
                                        className="w-100"
                                    />
                                </div>

                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
