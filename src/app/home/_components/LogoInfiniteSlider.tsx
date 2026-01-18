"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./logo-infinite-slider.scss";

const logos = [
  "/home/logos/logo1.svg",
  "/home/logos/logo2.svg",
  "/home/logos/logo3.svg",
  "/home/logos/logo4.svg",
  "/home/logos/logo5.svg",
];

export default function LogoInfiniteSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let offset = 0;
    const speed = 0.5;

    // Clone until filled
    const fill = () => {
      while (track.scrollWidth < container.offsetWidth * 2) {
        Array.from(track.children).forEach((child) => {
          track.appendChild(child.cloneNode(true));
        });
      }
    };

    fill();

    const tick = () => {
      offset -= speed;

      if (Math.abs(offset) >= track.scrollWidth / 2) {
        offset = 0;
      }

      track.style.left = `${offset}px`;
    };

    // 🔥 Use interval instead of RAF (mobile-safe)
    const interval = setInterval(tick, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-marquee" ref={containerRef}>
      <div className="logo-track" ref={trackRef}>
        {logos.map((logo, i) => (
          <div className="logo-item" key={i}>
            <Image src={logo} alt="logo" width={223} height={40} />
          </div>
        ))}
      </div>
    </div>
  );
}
