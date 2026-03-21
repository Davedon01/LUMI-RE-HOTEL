"use client";

import React from 'react';
import Image from 'next/image';
import { Utensils, Waves, Dumbbell, Flower2, Coffee, Wine } from 'lucide-react';
import img1 from '../public/Infinity Pool.jpg';
import img2 from '../public/Michelin Dining.jpg';
import img3 from '../public/Zen Spa & Wellness.jpg'
import img4 from '../public/Skyline Fitness.jpg'
import img5 from '../public/The Blue Lounge.jpg'
import img6 from '../public/Artisan Café.jpg'

const EXPERIENCES = [
  {
    title: "Infinity Pool",
    desc: "A seamless transition from azure water to the city skyline.",
    icon: <Waves size={20} />,
    image: img1,
    // "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
    size: "h-[400px]"
  },
  {
    title: "Michelin Dining",
    desc: "Culinary excellence served with a side of sunset views.",
    icon: <Utensils size={20} />,
    image: img2,
    // "https://images.unsplash.com/photo-1550966841-3ee5ad60b0d8?q=80&w=2070&auto=format&fit=crop",
    size: "h-[300px]"
  },
  {
    title: "Zen Spa & Wellness",
    desc: "Traditional rituals meet modern recovery.",
    icon: <Flower2 size={20} />,
    image: img3,
    // "https://images.unsplash.com/photo-1544161515-4af6b1d8e179?q=80&w=2070&auto=format&fit=crop",
    size: "h-[500px]"
  },
  {
    title: "Skyline Fitness",
    desc: "State-of-the-art equipment with a panoramic backdrop.",
    icon: <Dumbbell size={20} />,
    image: img4,
    // "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    size: "h-[350px]"
  },
  {
    title: "The Blue Lounge",
    desc: "Signature cocktails in an intimate, dark-blue atmosphere.",
    icon: <Wine size={20} />,
    image: img5,
    // "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    size: "h-[450px]"
  },
  {
    title: "Artisan Café",
    desc: "Freshly roasted beans and house-made pastries.",
    icon: <Coffee size={20} />,
    image: img6,
    // "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1974&auto=format&fit=crop",
    size: "h-[300px]"
  }
];

export default function Amenities() {
  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900/30 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">The Experience</h2>
          <p className="mt-4 text-4xl font-light text-slate-900 dark:text-slate-50 md:text-6xl">
            More Than Just a <span className="italic font-serif">Stay</span>
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {EXPERIENCES.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-3xl break-inside-avoid shadow-sm transition-all hover:shadow-2xl ${item.size}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay - Glassmorphism style */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-950/90 via-slate-900/20 to-transparent p-8 opacity-90 transition-opacity group-hover:opacity-100">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200 line-clamp-2 transition-all duration-500 group-hover:line-clamp-none">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}