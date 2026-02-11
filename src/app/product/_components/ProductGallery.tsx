"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/thumbs";
import "./product-gallery.scss";

type Props = {
    images: string[];
};

export default function ProductGallery({ images }: Props) {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="py-4 product-gallery">
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={12}
                className="product-gallery-main"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <Image
                            src={src}
                            alt={`Product image ${i + 1}`}
                            width={1200}
                            height={800}
                            className="w-100 h-auto"
                            priority={i === 0}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* THUMBNAILS */}
            <Swiper
                onSwiper={setThumbsSwiper}
                modules={[Thumbs]}
                slidesPerView={6}
                spaceBetween={12}
                watchSlidesProgress
                className="product-gallery-thumbs mt-3"
                breakpoints={{
                    0: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="thumb">
                            <Image
                                src={src}
                                alt={`Thumbnail ${i + 1}`}
                                width={200}
                                height={140}
                                className="w-100 h-auto"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
