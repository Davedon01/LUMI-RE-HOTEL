"use client";

import React, { useState, useMemo } from 'react';
import { Maximize, Users, Bed, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';

// Image Imports
import img1 from '../../public/Deluxe Ocean Suite.webp';
import img2 from '../../public/Panoramic Skyline Villa.webp';
import img3 from '../../public/Executive Garden Room.webp';
import img4 from '../../public/Junior-Urban-Suite.jpg';
import img5 from '../../public/Royal Penthouse.jpg';
import img6 from '../../public/Serene Pool Villa.jpg';

const ROOMS = [
  { id: 1, name: "Deluxe Ocean Suite", price: 450, size: "55m²", guests: 2, bed: "King Bed", image: img1, category: "Suite" },
  { id: 2, name: "Panoramic Skyline Villa", price: 890, size: "120m²", guests: 4, bed: "2 Queen Beds", image: img2, category: "Villa" },
  { id: 3, name: "Executive Garden Room", price: 320, size: "40m²", guests: 2, bed: "King Bed", image: img3, category: "Room" },
  { id: 4, name: "Junior Urban Suite", price: 380, size: "50m²", guests: 2, bed: "King Bed", image: img4, category: "Suite" },
  { id: 5, name: "Royal Penthouse", price: 1250, size: "210m²", guests: 6, bed: "3 King Beds", image: img5, category: "Penthouse" },
  { id: 6, name: "Serene Pool Villa", price: 750, size: "95m²", guests: 3, bed: "1 King, 1 Sofa", image: img6, category: "Villa" }
];

const CATEGORIES = ["All", "Room", "Suite", "Villa", "Penthouse"];

export default function RoomsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredRooms = useMemo(() => {
    if (activeCategory === "All") return ROOMS;
    return ROOMS.filter(room => room.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="bg-white dark:bg-slate-950 min-h-screen">
      {/* Page Header */}
      <div className="relative h-[40vh] w-full bg-slate-900 flex items-center justify-center pt-20">
        <div className="absolute inset-0 opacity-40">
           <Image 
            src={img5} 
            alt="Header Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight">
            Our <span className="italic font-serif">Accommodations</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-lg mx-auto text-sm md:text-base uppercase tracking-[0.2em]">
            Luxury tailored to your every need
          </p>
        </div>
      </div>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          {/* Filters & Results Info */}
          <div className="mb-12 flex flex-col items-center justify-between gap-8 border-b border-slate-200 pb-10 md:flex-row dark:border-slate-800">
            <div>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Showing {filteredRooms.length} {activeCategory === "All" ? "exclusive retreats" : activeCategory.toLowerCase() + "s"}
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Grid */}
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500">
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room) => (
                <div key={room.id} className="group cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {/* Image Container */}
                  <div className="relative h-100 w-full overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Category Tag */}
                    <div className="absolute left-6 top-6 rounded-full bg-slate-950/40 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                      {room.category}
                    </div>
                    {/* Price Tag Overlay */}
                    <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-3 text-sm font-bold text-slate-900 shadow-xl dark:bg-slate-900 dark:text-slate-50">
                      ${room.price}<span className="text-[10px] font-normal uppercase text-slate-500"> / Night</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 px-2">
                    <h3 className="text-2xl font-light text-slate-900 dark:text-slate-50 group-hover:text-blue-600 transition-colors duration-300">
                      {room.name}
                    </h3>
                    
                    {/* Icons / Specs Row */}
                    <div className="mb-6 mt-4 flex items-center gap-6 py-4 border-t border-slate-100 dark:border-slate-800/50">
                      <div className="flex items-center gap-2">
                        <Maximize size={16} className="text-blue-500" />
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-tight">{room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-blue-500" />
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-tight">{room.guests} Guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed size={16} className="text-blue-500" />
                        <span className="text-[11px] font-bold uppercase text-slate-500 tracking-tight">{room.bed}</span>
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-900 dark:text-slate-400 group-hover:gap-4 transition-all duration-300">
                      Explore This Suite <ArrowRight size={16} className="text-blue-500" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-500">No rooms found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}