"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft, Users, Maximize, Bed, CheckCircle, Star } from 'lucide-react';

// Re-importing your images (In a real app, these would come from a database/API)
import img1 from '../../../public/Deluxe Ocean Suite.webp';
import img2 from '../../../public/Panoramic Skyline Villa.webp';
import img3 from '../../../public/Executive Garden Room.webp';
import img4 from '../../../public/Junior-Urban-Suite.jpg';
import img5 from '../../../public/Royal Penthouse.jpg';
import img6 from '../../../public/Serene Pool Villa.jpg';

const ROOM_DATA = [
  { 
    id: 1, 
    name: "Deluxe Ocean Suite", 
    price: 450, 
    size: "55m²", 
    guests: 2, 
    bed: "King Bed", 
    mainImg: img1, 
    category: "Suite", 
    description: "Experience the ultimate coastal retreat. Our Deluxe Ocean Suite offers floor-to-ceiling windows with panoramic views of the Atlantic, paired with a private balcony for sunset viewing.",
    views: [img1, img4, img6] 
  },
  { 
    id: 2, 
    name: "Panoramic Skyline Villa", 
    price: 890, 
    size: "120m²", 
    guests: 4, 
    bed: "2 Queen Beds", 
    mainImg: img2, 
    category: "Villa", 
    description: "Perched on the highest floors, the Skyline Villa provides an expansive living area and a master bathroom featuring a deep-soak tub overlooking the city lights.",
    views: [img2, img5, img4] 
  },
  { 
    id: 3, 
    name: "Executive Garden Room", 
    price: 320, 
    size: "40m²", 
    guests: 2, 
    bed: "King Bed", 
    mainImg: img3, 
    category: "Room", 
    description: "A tranquil sanctuary on the ground level. This room features a private terrace that leads directly into our botanical Zen gardens, perfect for early morning meditation.",
    views: [img3, img6, img1] 
  },
  { 
    id: 4, 
    name: "Junior Urban Suite", 
    price: 380, 
    size: "50m²", 
    guests: 2, 
    bed: "King Bed", 
    mainImg: img4, 
    category: "Suite", 
    description: "Designed for the modern traveler, this suite combines industrial-chic aesthetics with high-end technology, featuring a dedicated workspace and a curated mini-bar.",
    views: [img4, img2, img3] 
  },
  { 
    id: 5, 
    name: "Royal Penthouse", 
    price: 1250, 
    size: "210m²", 
    guests: 6, 
    bed: "3 King Beds", 
    mainImg: img5, 
    category: "Penthouse", 
    description: "The crown jewel of Lumière. Spanning two floors with a private terrace, helipad access, and a dedicated 24/7 butler service to cater to your every whim.",
    views: [img5, img2, img1] 
  },
  { 
    id: 6, 
    name: "Serene Pool Villa", 
    price: 750, 
    size: "95m²", 
    guests: 3, 
    bed: "1 King, 1 Sofa", 
    mainImg: img6, 
    category: "Villa", 
    description: "Featuring a private heated plunge pool and an outdoor rainfall shower, this villa is the epitome of secluded luxury and intimate relaxation.",
    views: [img6, img3, img5] 
  }
];

const AMENITIES = ["High-speed Wi-Fi", "Mini Bar", "24h Room Service", "Safe Box", "Smart TV", "Nespresso Machine"];

export default function RoomDetailsPage() {
  const params = useParams();
  const roomId = Number(params.id);

  const room = useMemo(() => ROOM_DATA.find(r => r.id === roomId), [roomId]);

  if (!room) return <div className="p-20 text-center">Room not found.</div>;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      {/* Navigation Header */}
      <nav className="fixed bottom-0 z-50 w-full bg-white/80 p-6 backdrop-blur-md dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/rooms" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-blue-600 transition-colors">
            <ChevronLeft size={16} /> Back to Accommodations
          </Link>
          <div className="flex items-center gap-1 text-blue-600">
            <Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" />
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8">
        {/* Title & Price Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">{room.category}</span>
            <h1 className="mt-2 text-4xl font-light text-slate-900 dark:text-white md:text-6xl">{room.name}</h1>
          </div>
          <div className="text-right">
            <p className="text-3xl font-light text-slate-900 dark:text-white">${room.price}<span className="text-sm text-slate-500"> / Night</span></p>
          </div>
        </div>

        {/* Dynamic Image Views Gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:h-150">
          <div className="relative md:col-span-3 h-100 md:h-full overflow-hidden rounded-[2.5rem]">
            <Image src={room.mainImg} alt={room.name} fill className="object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:col-span-1">
            {room.views.slice(1).map((view, index) => (
              <div key={index} className="relative h-40 md:h-full overflow-hidden rounded-[2.5rem]">
                <Image src={view} alt={`View ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Details Content */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-light text-slate-900 dark:text-white">The Space</h2>
            <p className="mt-6 leading-relaxed text-slate-500 dark:text-slate-400">
              {room.description}
            </p>

            {/* Quick Specs */}
            <div className="mt-12 flex flex-wrap gap-10 border-y border-slate-100 py-10 dark:border-slate-800">
              <Spec icon={<Maximize />} label="Size" value={room.size} />
              <Spec icon={<Users />} label="Capacity" value={`${room.guests} Guests`} />
              <Spec icon={<Bed />} label="Bedding" value={room.bed} />
            </div>

            {/* Amenities Grid */}
            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white">Included Amenities</h3>
              <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                {AMENITIES.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle size={16} className="text-blue-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Redirect Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 rounded-[2.5rem] bg-slate-50 p-8 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <h3 className="text-xl font-light text-slate-900 dark:text-white">Ready to stay?</h3>
              <p className="mt-2 text-sm text-slate-500">Check availability for {room.name}</p>
              
              <Link 
                href="/booking"
                className="mt-8 block w-full rounded-full bg-blue-600 py-5 text-center text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-all hover:scale-[1.02]"
              >
                Reserve This Suite
              </Link>
              
              <p className="mt-6 text-center text-[10px] uppercase tracking-tighter text-slate-400">
                Best price guaranteed when booking direct
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</p>
        <p className="text-sm font-medium text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
}