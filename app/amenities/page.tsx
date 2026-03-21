"use client";

import React from 'react';
import Image from 'next/image';
import { Utensils, Waves, Dumbbell, Flower2, Coffee, Wine, Sparkles } from 'lucide-react';

// Image Imports
import img1 from '../../public/Infinity Pool.jpg';
import img2 from '../../public/Michelin Dining.jpg';
import img3 from '../../public/Zen Spa & Wellness.jpg';
import img4 from '../../public/Skyline Fitness.jpg';
import img5 from '../../public/The Blue Lounge.jpg';
import img6 from '../../public/Artisan Café.jpg';
import Link from 'next/link';

const EXPERIENCES = [
  {
    title: "Infinity Pool",
    desc: "A seamless transition from azure water to the city skyline. Experience weightless relaxation above the clouds.",
    icon: <Waves size={20} />,
    image: img1,
    size: "h-[450px]"
  },
  {
    title: "Michelin Dining",
    desc: "Culinary excellence served with a side of sunset views. Our chefs redefine the art of fine dining.",
    icon: <Utensils size={20} />,
    image: img2,
    size: "h-[350px]"
  },
  {
    title: "Zen Spa & Wellness",
    desc: "Traditional rituals meet modern recovery. A sanctuary designed to restore your inner balance.",
    icon: <Flower2 size={20} />,
    image: img3,
    size: "h-[550px]"
  },
  {
    title: "Skyline Fitness",
    desc: "State-of-the-art equipment with a panoramic backdrop. Redefining your morning routine.",
    icon: <Dumbbell size={20} />,
    image: img4,
    size: "h-[400px]"
  },
  {
    title: "The Blue Lounge",
    desc: "Signature cocktails in an intimate, dark-blue atmosphere. The perfect end to an exquisite day.",
    icon: <Wine size={20} />,
    image: img5,
    size: "h-[500px]"
  },
  {
    title: "Artisan Café",
    desc: "Freshly roasted beans and house-made pastries in a sun-drenched, tranquil setting.",
    icon: <Coffee size={20} />,
    image: img6,
    size: "h-[350px]"
  }
];

export default function AmenitiesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      
      {/* Page Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-slate-900">
        <Image 
          src={img3} 
          alt="Wellness Hero" 
          fill 
          className="object-cover opacity-60 grayscale-20"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-transparent to-white dark:to-slate-950" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md border border-white/20">
            <Sparkles size={12} className="text-blue-400" /> Exceptional Amenities
          </div>
          <h1 className="text-5xl font-light tracking-tight text-white md:text-7xl">
            The <span className="italic font-serif">Lumière</span> Life
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 font-light leading-relaxed">
            Beyond luxury, we provide a sanctuary of curated experiences designed to nourish the body and inspire the soul.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-blue-600">Refined Relaxation</h2>
            <p className="mt-4 text-3xl font-light leading-tight text-slate-900 dark:text-slate-50 md:text-4xl">
              Every detail is meticulously crafted to ensure your <span className="italic font-serif">comfort</span> is absolute.
            </p>
          </div>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Whether you're seeking a high-energy workout with a view of the skyline or a silent retreat into our artisan spa, our amenities are available 24/7 to cater to your personal rhythm.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
          {EXPERIENCES.map((item, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[2.5rem] break-inside-avoid shadow-xl transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${item.size}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay - Glassmorphism style */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-950/90 via-slate-900/10 to-transparent p-10 opacity-90 transition-opacity group-hover:opacity-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-xl border border-white/10 transition-transform duration-500 group-hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-light text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 line-clamp-2 transition-all duration-500 group-hover:line-clamp-none">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-32 rounded-[3rem] bg-slate-50 p-12 text-center dark:bg-slate-900/50">
            <h3 className="text-2xl font-light text-slate-900 dark:text-slate-50">Ready to experience it in person?</h3>
            <Link href="/booking">
                <button className="mt-8 rounded-full bg-slate-900 px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
              Book Your Stay Now
            </button>
            </Link>
        </div>
      </section>
    </main>
  );
}