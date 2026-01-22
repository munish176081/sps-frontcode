"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.scss";

const testimonials = [
    {
        text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed.",
        name: "Millon Zahino",
        role: "Behavioral Science",
        rating: 5,
    },
    {
        text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed.",
        name: "Millon Zahino",
        role: "Behavioral Science",
        rating: 5, 
    },
    {
        text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed.",
        name: "Millon Zahino",
        role: "Behavioral Science",
        rating: 5,
    },
    {
        text: "As an industrial, securing capacity and optimizing budget are key. In that perspective, you are looking for a transport partner committed.",
        name: "Millon Zahino",
        role: "Behavioral Science",
        rating: 5,
    },
];

export default function TestimonialSection() {
    return (
        <section className="testimonial-section">
            <div className="container">
                
                <div className="row mb-4 mb-md-5 align-items-end">
                    <div className="col-lg-6">
                        <small className="badge-text badge-primary d-block mb-3 text-captialize">Client Stories</small>
                        <h2 className="h2">What Our Clients Say</h2>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <p className="header-desc">
                            Discover how Splendour in Stone has helped clients create unique
                            spaces with natural character and lasting beauty.
                        </p>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    // pagination={{ clickable: false }}
                    centeredSlides={true}
                    // loop={true}
                    initialSlide={1}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.15,
                            centeredSlides: true,
                            pagination: false,
                        },
                        768: {
                            slidesPerView: 2.2,
                            centeredSlides: true,
                        },
                        1024: {
                            slidesPerView: 3,
                            centeredSlides: true,
                        },
                    }}
                >

                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="testimonial-card"
                            >
                                <div className="w-100 d-flex align-items-end justify-content-between star_group">
                                    <div className="stars">
                                        {"★".repeat(item.rating)}
                                    </div>
    
                                    <div className="quote"> 
                                        <Image src="/icons/quote-icon.png" alt="Quote" width="73" height="55" />
                                    </div>
                                    </div>
                                 
                                <p className="text">{item.text}</p>

                                {/* AUTHOR */}
                                <div className="author">
                                    <span>{item.name}</span>
                                    <small>{item.role}</small>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
