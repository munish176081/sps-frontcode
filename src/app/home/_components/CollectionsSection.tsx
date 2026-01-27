"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "@/components/ui/Button";

import "swiper/css";
import "./collections.scss";

const wallingImages = [
  "/home/collections/walling/wall1.webp",
  "/home/collections/walling/wall2.webp",
  "/home/collections/walling/wall3.webp",
  "/home/collections/walling/wall4.webp",
];

const pavingImages = [
  "/home/collections/paving/parv1.webp",
  "/home/collections/paving/parv2.webp",
  "/home/collections/paving/parv3.webp",
  "/home/collections/paving/parv4.webp",
];

export default function CollectionsSection() {
  return (
    <section className="collections-section">
      <div className="container">
    
        <div className="row mb-md-5 mb-4">
          <div className="col-lg-6">
            <small className="badge-text badge-primary d-block mb-3 text-captialize">Client Stories</small>
            <h2 className="h2">Explore Our Stone Collections</h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p className="header-desc">
              Carefully selected natural stone ranges, crafted to elevate your
              walls and pavements with timeless elegance and durability.
            </p>
          </div>
        </div>

        {/* WALLING RANGE */}
        <div className="row mb-md-5 mb-4 pb-md-3">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="position-relative h-100 collection-block">
                <h3 className="h3">Walling Range</h3>
                <p>Choose from classic split-face to rustic freeform designs, ideal for internal and external walls, facades, and landscaping features.</p>
                <Button href="#" rounded size="md" label="View collection" variant="black" className="icon-verticle bottom-0 end-0 d-none d-md-inline" /> 
            </div>
          </div>

          <div className="col-lg-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2.5}
              loop
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2.5 },
                768: { slidesPerView: 2.5 },
              }}
            >
              {wallingImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="collection-img">
                    <Image src={img} alt="" width={360} height={530} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Button href="#" rounded size="md" label="View collection" variant="black" className="d-md-none mt-3" /> 
          </div>
        </div>

        {/* PAVING RANGE */}
        <div className="row flex-lg-row-reverse">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="position-relative h-100 collection-block"> 
                <h3 className="h3">Paving Range</h3>
                <p>Options include sandstone, granite, limestone, and slate, each delivering unique character, slip resistance, and weather resilience. </p>
                <Button href="#" rounded size="md" label="View collection" variant="black" className="icon-verticle bottom-0 start-0 d-none d-md-inline" /> 
            </div>
          </div>

          <div className="col-lg-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2.5}
              loop
              autoplay={{
                delay: 104500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: { slidesPerView: 2.5 },
                768: { slidesPerView: 2.5 },
              }}
            >
              {pavingImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="collection-img">
                    <Image src={img} alt="" width={360} height={530} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Button href="#" rounded size="md" label="View collection" variant="black" className="icon-verticle d-md-none mt-3" /> 
          </div>
        </div>

      </div>
    </section>
  );
}
