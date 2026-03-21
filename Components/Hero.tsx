"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"; // Import Next.js Image component
import img1 from "../public/Hero-1-Hotel.webp";
import img2 from "../public/Hero-2-Hotel.webp";
import img3 from "../public/Hero-3-Hotel.webp";
import Link from "next/link";

const SLIDES = [
  {
    image: img1, // Removed the extra curly braces
    title: "Experience Pure Serenity",
    subtitle: "A sanctuary of luxury nestled in the heart of the city.",
  },
  {
    image: img2,
    title: "Unrivaled Coastal Views",
    subtitle: "Wake up to the sound of waves and golden horizons.",
  },
  {
    image: img3,
    title: "The Art of Fine Dining",
    subtitle: "Indulge in culinary masterpieces by world-class chefs.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Main Hero Image using Next.js Image for optimization */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill // Replaces h-full w-full
            priority={index === 0} // Loads the first image immediately
            className={`object-cover transition-transform duration-6000 ease-linear ${
              index === current ? "scale-100" : "scale-110"
            }`}
          />

          {/* Combined Overlay: Anchors the top and bottom with deep Slate Blue */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-black/70 via-black/20 to-slate-950/90" />

          {/* Content Container */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="mb-4 max-w-5xl text-5xl font-light tracking-tight text-slate-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:text-8xl">
              {slide.title}
            </h1>

            <p className="mb-10 max-w-2xl text-lg font-medium text-slate-100 drop-shadow-md md:text-2xl">
              <span className="bg-black/20 px-4 py-2 backdrop-blur-xs rounded-lg border border-white/10">
                {slide.subtitle}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/booking">
              <button className="rounded-full bg-blue-600 px-4 py-4 sm:px-8 sm:py-4 font-bold text-white shadow-2xl transition-all hover:bg-blue-500 hover:scale-105 active:scale-95">
                Reserve Your Stay
              </button>
              </Link>
              
              <Link href="/gallery">
               <button className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20">
                View Gallery
              </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20 hidden md:flex"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md hover:bg-white/20 hidden md:flex"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 z-30 flex -translate-x-1/2 gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? "w-12 bg-blue-500" : "w-6 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}