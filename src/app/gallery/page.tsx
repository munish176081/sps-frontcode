"use client";

import { useState } from "react";
import Image from "next/image";
import "./style.scss";
import Button from "@/components/ui/Button";
import './style.scss';

const IMAGES = [
  "/gallery/pic1.webp",
  "/gallery/pic2.webp",
  "/gallery/pic3.webp",
  "/gallery/pic4.webp",
  "/gallery/pic5.webp",
  "/gallery/pic6.webp",
  "/gallery/pic7-full.webp",
  "/gallery/pic1.webp",
  "/gallery/pic2.webp",
  "/gallery/pic3.webp",
  "/gallery/pic4.webp",
  "/gallery/pic5.webp",
];

const IMAGES_PER_LOAD = 7;

export default function GalleryPage() {

  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);
  const visibleImages = IMAGES.slice(0, visibleCount);

  return (
    <>
      <section className="page-header mt-0 mt-md-5 mb-4 pt-4 pt-md-5 pb-md-4">
        <div className="container">
          <div className="row align-items-start g-3">
            <div className="col-md-8">
              <h1 className="h1 page-title mb-0">Gallery</h1>
            </div>
            <div className="col-md-4 text-md-end">
              <Button href="/get-quote" rounded size="md" label="Get quote" variant="black" />
            </div>

          </div>
        </div>
      </section>

      <hr />

      <section className="gallery-sec py-4 py-md-5">

        <div className="container"> 
          <div className="gallery-masonry">
            {visibleImages.map((src, i) => (
              <div 
                className={`gallery-item ${(i + 1) % 7 === 0 ? "full-width" : ""}`}
                key={i}
              >
                <Image
                  src={src}
                  alt="Gallery image"
                  width={600}
                  height={800}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < IMAGES.length && (
            <div className="text-center mt-4">
              <Button
                className="" label="View more" rounded variant="black"
                onClick={() => setVisibleCount(v => v + IMAGES_PER_LOAD)}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}