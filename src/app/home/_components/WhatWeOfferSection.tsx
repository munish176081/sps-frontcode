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
                    <h2 className="h1 fw-medium m-0">What We Offer</h2>
                </div>

                <hr className="py-3 m-0" />

                {/* Grid */}
                <div className="row g-4">
                    {/* Walling */}
                    <div className="col-6 col-md-4 col-lg-3 position-relative offer-box">
                        <Link href="#" className="d-block">
                            <span className="h5 mb-4 d-inline-block">Walling
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#icon-arrow-top-right-a)">
                                        <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                    </g>
                                </svg>
                            </span>
                            <div className="collection_pic">
                                <Image
                                    src="/home/what-we-offer/offer1.webp"
                                    alt="Walling"
                                    width={348}
                                    height={508}
                                    className="w-100"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Paving */}
                    <div className="col-6 col-md-4 col-lg-3 position-relative offer-box">
                        <Link href="#" className="d-block">
                            <span className="h5 mb-4 d-inline-block">Paving
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#icon-arrow-top-right-a)">
                                        <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                    </g>
                                </svg>
                            </span>

                            <div className="collection_pic">
                                <Image
                                    src="/home/what-we-offer/offer2.webp"
                                    alt="Walling"
                                    width={348}
                                    height={508}
                                    className="img-fluid w-100"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Cobblestone */}
                    <div className="col-6 col-md-4 col-lg-3 position-relative offer-box">
                        <Link href="#" className="d-block">
                            <span className="h5 mb-4 d-inline-block">Cobblestone
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#icon-arrow-top-right-a)">
                                        <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                    </g>
                                </svg>
                            </span>

                            <div className="collection_pic">
                                <Image
                                    src="/home/what-we-offer/offer3.webp"
                                    alt="Walling"
                                    width={348}
                                    height={508}
                                    className="img-fluid w-100"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Bricks */}
                    <div className="col-6 col-md-4 col-lg-3 position-relative offer-box">
                        <Link href="#" className="d-block">
                            <span className="h5 mb-4 d-inline-block">Bricks
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#icon-arrow-top-right-a)">
                                        <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                    </g>
                                </svg>
                            </span>

                            <div className="collection_pic">
                                <Image
                                    src="/home/what-we-offer/offer4.webp"
                                    alt="Walling"
                                    width={348}
                                    height={508}
                                    className="img-fluid w-100"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Marbleroom */}
                    <div className="col-6 col-md-4 col-lg-3 position-relative offer-box">
                        <Link href="#" className="d-block">
                            <span className="h5 mb-4 d-inline-block">Marbleroom
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#icon-arrow-top-right-a)">
                                        <path d="m5.25 17.63 10.7-10.7m0 0H7.19m8.76 0v8.75" stroke="#0E0E0E" strokeLinejoin="bevel"></path>
                                    </g>
                                </svg>
                            </span>
                            <div className="collection_pic">
                                <Image
                                    src="/home/what-we-offer/offer5.webp"
                                    alt="Walling"
                                    width={348}
                                    height={508}
                                    className="img-fluid w-100"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* View All Collections */}
                    <div className="col-6 col-md-4 col-lg-3 d-flex flex-column align-items-end view-collection-box">
                        <span className="w-100 h5 mb-4 d-block">&nbsp;</span>
                        <Link
                            href="#"
                            className="border w-100 h-100 p-4 white-box d-flex flex-column justify-content-end"
                        >
                            <div className="view-link w-100 d-flex align-items-center justify-content-between">
                                <span className="h3 mb-0">
                                    View All <br /> Collections
                                </span>
                                <em className="ms-2">
                                    <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M41.8691 22.5452H54.752V35.4281" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M22.5449 54.7522L54.7522 22.545" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
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
