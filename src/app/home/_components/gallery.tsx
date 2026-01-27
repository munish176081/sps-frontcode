"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./gallery.scss";

import "swiper/css";
import Button from "@/components/ui/Button";

const images = [
    "/home/gallery/hero1.webp",
    "/home/gallery/hero2.webp",
    "/home/gallery/hero3.webp",
    "/home/gallery/hero4.webp",
];

export default function Gallery() {
    return (
        <section className="bg-green pt-4 pt-md-5 gallery-sec">
            <div className="container">
                <div className="d-flex flex-column">

                    {/* LEFT CONTENT */}
                    <div className="positon-relative gallery-content">
                        <span className="badge-text text-white d-block">Gallery</span>
                        <h2 className="h2 text-white">Stonework, Transformed</h2>
                        <p>
                            Explore our gallery to see how natural stone craftsmanship
                            elevates gardens, entrances, and architectural spaces with
                            timeless beauty.
                        </p>
                        <Button rounded size="md" label="View gallery" href="#" variant="white" className="icon-verticle" />
                    </div> 

                    {/* RIGHT SLIDER */}
                    <div className="slider-wrap">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={24}
                            slidesPerView={3.5}
                            initialSlide={1}
                            loop
                            autoplay={{
                                delay: 2800,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 2.5 },
                                768: { slidesPerView: 2.5 },
                                1200: { slidesPerView: 3.5 },
                                1500: { slidesPerView: 3.5 },
                            }}
                        >
                            {images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className="gallery-img">
                                        <Image src={img} alt="Gallery" width={400} height={400} priority={index === 0} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </section>
    );
}
