"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Camera } from 'lucide-react';

const CATEGORIES = ["All", "Rooms", "Dining", "Wellness", "Lounge"];

const GALLERY_ITEMS = [
  { id: 1, category: "Rooms", title: "Presidential Suite", src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, category: "Dining", title: "Skyline Restaurant", src: "https://images.unsplash.com/photo-1550966841-3ee5ad60b0d8?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, category: "Wellness", title: "Infinity Edge Pool", src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, category: "Lounge", title: "The Midnight Bar", src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, category: "Rooms", title: "Ocean View Balcony", src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop" },
  { id: 6, category: "Wellness", title: "Signature Spa", src: "https://images.unsplash.com/photo-1544161515-4af6b1d8e179?q=80&w=2070&auto=format&fit=crop" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = activeFilter === "All" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header & Filter */}
        <div className="mb-16 flex flex-col items-center justify-between gap-8 border-b border-slate-100 pb-12 dark:border-slate-800 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Visual Journey</h2>
            <p className="mt-2 text-4xl font-light text-slate-900 dark:text-slate-50 md:text-5xl">
              Captured <span className="italic font-serif">Moments</span>
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeFilter === cat 
                  ? "bg-slate-900 text-white dark:bg-blue-600" 
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-87.5 overflow-hidden rounded-4xl bg-slate-100 dark:bg-slate-900 animate-in fade-in zoom-in duration-500"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* iOS Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-xl transition-transform duration-500 group-hover:scale-110">
                  <Maximize2 size={24} />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                  {item.title}
                </p>
                <span className="mt-1 text-xs text-slate-300">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 rounded-full border border-slate-200 px-10 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:text-slate-400 dark:hover:bg-blue-600 dark:hover:text-white">
            <Camera size={18} />
            Follow @LumiereHotel
          </button>
        </div>
      </div>
    </section>
  );
}