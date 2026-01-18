import Image from "next/image";
import Link from "next/link";

export default function WhatWeOfferSection() {
    return (
        <section className="py-3">
            <div className="container">
                {/* Section Header */}
                <div className="mb-4">
                    <small className="badge-text badge-primary d-block">
                        Our Stone Services
                    </small>
                    <h2 className="h1 fw-medium">What We Offer</h2>
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {/* Walling */}
                    <div className="col-6 col-md-4 col-lg-3 d-none d-md-block">
                        <Link href="#" className="h6 mb-3 d-block">Walling</Link>
                        <Image
                            src="/home/what-we-offer/offer1.webp"
                            alt="Walling"
                            width={348}
                            height={508}
                            className="img-fluid w-100"
                        />
                    </div>

                    {/* Paving */}
                    <div className="col-6 col-md-4 col-lg-3 d-none d-md-block">
                        <Link href="#" className="h6 mb-3 d-block">Paving</Link>
                        <Image
                            src="/home/what-we-offer/offer2.webp"
                            alt="Walling"
                            width={348}
                            height={508}
                            className="img-fluid w-100"
                        />
                    </div>

                    {/* Cobblestone */}
                    <div className="col-6 col-md-4 col-lg-3 d-none d-md-block">
                        <Link href="#" className="h6 mb-3 d-block">Cobblestone</Link>
                        <Image
                            src="/home/what-we-offer/offer3.webp"
                            alt="Walling"
                            width={348}
                            height={508}
                            className="img-fluid w-100"
                        />
                    </div>

                    {/* Bricks */}
                    <div className="col-6 col-md-4 col-lg-3 d-none d-md-block">
                        <Link href="#" className="h6 mb-3 d-block">Bricks</Link>
                        <Image
                            src="/home/what-we-offer/offer4.webp"
                            alt="Walling"
                            width={348}
                            height={508}
                            className="img-fluid w-100"
                        />
                    </div>

                    {/* Marbleroom */}
                    <div className="col-6 col-md-4 col-lg-3">
                        <Link href="#" className="h6 mb-3 d-block">Marbleroom</Link>
                        <Image
                            src="/home/what-we-offer/offer5.webp"
                            alt="Walling"
                            width={348}
                            height={508}
                            className="img-fluid w-100"
                        />
                    </div>

                    {/* View All Collections */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-end view-collection-box">
                        <Link href="#" className="h6 mb-3 d-block">&nbsp;</Link>
                        <Link
                            href="#"
                            className="border w-100 h-100 p-3 grey-box d-flex flex-column justify-content-end"
                        >
                            <div className="view-link w-100 d-flex align-items-center justify-content-between">
                                <span className="h3 mb-0">
                                    View All <br /> Collections
                                </span>
                                <em className="ms-2">
                                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M41.8691 22.5452H54.752V35.4281" stroke="black" strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" />
                                        <path d="M22.5449 54.7522L54.7522 22.545" stroke="black" strokeWidth="3" stroke-linecap="round" strokeLinejoin="round" />
                                    </svg>
                                </em>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
