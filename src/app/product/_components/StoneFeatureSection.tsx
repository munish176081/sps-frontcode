"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import './stone.scss';

const FEATURES = [
  {
    id: 1,
    title: "Craft + Texture",
    content:
      "From linear and free-form profiles to ashlar patterns and bespoke cuts, collaborate with us to create a walling solution that reflects your vision and elevates every surface it touches.",
    image: "/products/walling/Craft-texture.webp",
  },
  {
    id: 2,
    title: "Sustainability + us",
    content:
      "We’re committed to creating high-performance hardscaping products for modern urban living that have minimal impact on our environment.",
    image: "/products/walling/Craft-texture1.webp",
    cta: {
      label: "About our sustainable practices",
      href: "/sustainability",
    },
  },
  {
    id: 3,
    title: "Request samples + pricing",
    content:
      "Order samples or request pricing details tailored to your project requirements.",
    image: "/products/walling/Craft-texture.webp",
  },
];

export default function StoneFeatureSection() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = FEATURES.find(f => f.id === activeId)!;

  return (
    <section className="py-5 stone-feature">
      <div className="container">
        {/* HEADER */}
        <div className="row align-items-end mb-4">
          <div className="col-lg-8">
            <small className="text-muted d-block mb-2">Explore More</small>
            <h2 className="h3 mb-0">
              Decorative Natural Stone Walling, <br />
              Crafted For Architectural Impact.
            </h2>
          </div>
          <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
            <Button
              label="Download brochure"
              href="/brochure"
              variant="black"
              rounded
            />
          </div>
        </div>

        <hr />

        {/* CONTENT */}
        <div className="row g-4 mt-0">
          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <div className="feature-image">
              <Image
                key={active.image}
                src={active.image}
                alt={active.title}
                width={900}
                height={700}
                className="img-fluid feature-image"
                priority
              />
            </div>
          </div>

          {/* RIGHT ACCORDION (STICKY) */}
          <div className="col-lg-6 py-3">
            <div className="sticky-top" style={{ top: "120px" }}>
              {FEATURES.map((item) => {
                 const isOpen = item.id === activeId;

                return (
                  <div key={item.id} 
                    className={`accordion-item ${isOpen ? "active" : ""}`}
                  >
                    <button
                      className="accordion-header w-100 text-start d-flex justify-content-between align-items-center bg-transparent border-0 px-0 py-3"
                      onClick={() => setActiveId(item.id)}
                    >
                      <span className="h3 fw-normal mb-0">{item.title}</span>
                      <span className="icon">{isOpen ? "–" : "+"}</span>
                    </button>

                    {/* SMOOTH COLLAPSING BODY */}
                    <div
                      className="accordion-body-wrapper"
                      style={{
                        maxHeight: isOpen ? "250px" : "0px",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="accordion-body">
                        <p>{item.content}</p>

                        {item.id === 2 && (
                          <Button
                            label="About our sustainable practices"
                            href="/sustainability"
                            variant="black"
                            rounded
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
