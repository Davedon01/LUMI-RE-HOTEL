"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Maximize2, X, Camera, Sparkles } from 'lucide-react';

// Image Imports from your public folder
import img1 from '../../public/Infinity Pool.jpg';
import img2 from '../../public/Michelin Dining.jpg';
import img3 from '../../public/Zen Spa & Wellness.jpg';
import img4 from '../../public/Skyline Fitness.jpg';
import img5 from '../../public/The Blue Lounge.jpg';
import img6 from '../../public/Artisan Café.jpg';
import img7 from '../../public/Deluxe Ocean Suite.webp';
import img8 from '../../public/Panoramic Skyline Villa.webp';
import img9 from '../../public/Executive Garden Room.webp';

const CATEGORIES = ["All", "Suites", "Dining", "Wellness", "Lounge"];

const GALLERY_ITEMS = [
  { id: 1, category: "Suites", title: "Deluxe Ocean Suite", src: img7 },
  { id: 2, category: "Dining", title: "Michelin Dining", src: img2 },
  { id: 3, category: "Wellness", title: "Infinity Pool", src: img1 },
  { id: 4, category: "Lounge", title: "The Blue Lounge", src: img5 },
  { id: 5, category: "Wellness", title: "Zen Spa & Wellness", src: img3 },
  { id: 6, category: "Suites", title: "Skyline Villa", src: img8 },
  { id: 7, category: "Dining", title: "Artisan Café", src: img6 },
  { id: 8, category: "Wellness", title: "Skyline Fitness", src: img4 },
  { id: 9, category: "Suites", title: "Garden Room", src: img9 }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = useMemo(() => 
    activeFilter === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(item => item.category === activeFilter),
    [activeFilter]
  );

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Page Hero - Using the Zen Spa image as the high-impact backdrop */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <Image 
          src={img3}
          alt="Gallery Hero"
          fill
          className="object-cover opacity-50 grayscale-30"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md border border-white/20">
            <Sparkles size={12} className="text-blue-400" /> Visual Narrative
          </div>
          <h1 className="text-5xl font-light text-white tracking-tight md:text-7xl">
            A Glimpse of <span className="italic font-serif">Luxe</span>
          </h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Filter Navigation */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-8 py-3 text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${
                activeFilter === cat 
                ? "bg-blue-600 text-white shadow-xl shadow-blue-500/20 scale-105" 
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item)}
              className="group relative h-112.5 cursor-pointer overflow-hidden rounded-[2.5rem] bg-slate-100 dark:bg-slate-900 transition-all duration-700 hover:-translate-y-2 animate-in fade-in zoom-in"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-transform duration-500 group-hover:scale-110 border border-white/20">
                  <Maximize2 size={24} />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">{item.title}</p>
                <span className="mt-1 text-[10px] font-bold uppercase text-blue-400 tracking-widest">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-24 text-center">
          <button className="group inline-flex items-center gap-4 rounded-full border border-slate-200 px-12 py-5 text-xs font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:text-slate-400 dark:hover:bg-blue-600 dark:hover:text-white">
            <Camera size={20} className="group-hover:rotate-12 transition-transform" />
            Join the Journey @LumiereHotel
          </button>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300">
            <X size={32} />
          </button>
          
          <div className="relative h-full w-full max-w-6xl overflow-hidden rounded-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-2xl font-light italic">{selectedImage.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-blue-400 font-bold">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}