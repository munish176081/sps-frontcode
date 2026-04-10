"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { apiClient } from "@/api/client";
import "./style.scss";

type GalleryItem = {
  id: number;
  title?: string;
  image: string;
};

const IMAGES_PER_LOAD = 7;

export default function GalleryPage() {

  const [images, setImages] = useState<GalleryItem[]>([]);
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);

  useEffect(() => {
    async function loadGallery() {
      try {
        const res = await apiClient("/gallery");
        setImages(res.data ?? []);
      } catch (error) {
        console.error("Gallery load error:", error);
      }
    }

    loadGallery();
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <>
      <section className="page-header mt-0 mt-md-5 mb-4 pt-4 pt-md-5 pb-md-4">
        <div className="container">
          <div className="row align-items-end g-3">
            <div className="col-md-8">
              <h1 className="h1 page-title mb-0">Gallery</h1>
            </div>

            <div className="col-md-4 text-md-end">
              <Button
                href="/get-quote"
                rounded
                size="md"
                label="Get quote"
                variant="black"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="gallery-sec py-4 py-md-5">

        <div className="container">

          <div className="gallery-masonry">

            {visibleImages.map((item, i) => (
              <div
                key={item.id}
                className={`gallery-item ${(i + 1) % 7 === 0 ? "full-width" : ""}`}
              >
                <Image
                  src={item.image}
                  alt={item.title ?? "Gallery image"}
                  width={600}
                  height={800}
                  className="img-fluid"
                />
              </div>
            ))}

          </div>

          {/* Load More */}
          {visibleCount < images.length && (
            <div className="text-center mt-4">

              <Button
                label="View more"
                rounded
                variant="black"
                onClick={() => setVisibleCount(v => v + IMAGES_PER_LOAD)}
              />

            </div>
          )}

        </div>
      </section>
    </>
  );
}