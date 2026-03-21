"use client";

import React from 'react';
import { Maximize, Users, Bed, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import img1 from '../public/Deluxe Ocean Suite.webp';
import img2 from '../public/Panoramic Skyline Villa.webp';
import img3 from '../public/Executive Garden Room.webp'

const ROOMS = [
  {
    id: 1,
    name: "Deluxe Ocean Suite",
    price: 450,
    size: "55m²",
    guests: 2,
    bed: "King Bed",
    image: img1
    //  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Panoramic Skyline Villa",
    price: 890,
    size: "120m²",
    guests: 4,
    bed: "2 Queen Beds",
    image: img2
    // "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Executive Garden Room",
    price: 320,
    size: "40m²",
    guests: 2,
    bed: "King Bed",
    image: img3
    // "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2074&auto=format&fit=crop"
  }
];

export default function FeaturedRooms() {
  return (
    <section className="bg-white px-4 py-24 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-end justify-between border-b border-slate-200 pb-8 md:flex-row dark:border-slate-800">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Accommodations</h2>
            <p className="mt-4 text-4xl font-light text-slate-900 dark:text-slate-50 md:text-5xl">
              Curated Spaces for <span className="italic">Exquisite</span> Living
            </p>
          </div>
          <button className="mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:gap-4 dark:text-slate-400 dark:hover:text-white md:mt-0">
            View All Rooms <ArrowRight size={18} />
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <div key={room.id} className="group relative overflow-hidden rounded-3xl bg-slate-50 transition-all hover:shadow-2xl dark:bg-slate-900/50">
              
              {/* Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Price Tag Overlay */}
                <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-900 backdrop-blur-md dark:bg-slate-950/80 dark:text-slate-50">
                  ${room.price}<span className="text-[10px] font-normal uppercase text-slate-500"> / Night</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-light text-slate-900 dark:text-slate-50">{room.name}</h3>
                
                {/* Icons / Specs Row */}
                <div className="mb-8 flex items-center justify-between border-y border-slate-100 py-4 dark:border-slate-800/50">
                  <div className="flex flex-col items-center gap-1">
                    <Maximize size={16} className="text-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{room.size}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users size={16} className="text-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{room.guests} Guests</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Bed size={16} className="text-blue-500" />
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-500">{room.bed}</span>
                  </div>
                </div>

                <button className="w-full rounded-xl border border-slate-200 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:text-slate-400 dark:hover:bg-blue-600 dark:hover:text-white">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}