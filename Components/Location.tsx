"use client";

import React from 'react';
import { MapPin, Phone, Mail, Navigation, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Contact & Directions Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">The Destination</h2>
            <p className="mt-4 text-4xl font-light text-slate-900 dark:text-slate-50 md:text-5xl">
              In the Heart of <span className="italic font-serif">the City</span>
            </p>
            
            <div className="mt-10 space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-900 dark:text-blue-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Address</p>
                  <p className="mt-1 text-lg text-slate-900 dark:text-slate-200">123 Lumière Blvd, Central District, Abuja</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-900 dark:text-blue-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Reservations</p>
                  <p className="mt-1 text-lg text-slate-900 dark:text-slate-200">+234 800 LUMIERE</p>
                </div>
              </div>

              {/* Arrival */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-900 dark:text-blue-500">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Check-In</p>
                  <p className="mt-1 text-lg text-slate-900 dark:text-slate-200">Arrival 3:00 PM • Departure 11:00 AM</p>
                </div>
              </div>
            </div>

            <button className="mt-12 flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-blue-500 hover:shadow-blue-500/20 active:scale-95">
              <Navigation size={20} />
              Get Directions
            </button>
          </div>

          {/* Custom Styled Map Column */}
          <div className="order-1 h-125 overflow-hidden rounded-[2.5rem] border border-white/20 shadow-2xl dark:border-slate-800 lg:order-2">
            {/* PRO TIP: For a real implementation, use a Snazzy Maps style 
                or a Mapbox dark-mode token. This is a visual representation. 
            */}
            <div className="relative h-full w-full bg-slate-200 dark:bg-slate-800">
               {/* Placeholder for the Map Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.563066601452!2d7.4771826!3d9.0542702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b0ac7be65dd%3A0xb35bd8eedbca4ae7!2sFraser%20Suites%20Abuja!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0x242f3e&style=feature:water|element:geometry|color:0x17263c"
                className="h-full w-full border-0 grayscale invert-[0.9] hue-rotate-190"
                loading="lazy"
              ></iframe>
              
              {/* Floating Map Label */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur-md dark:bg-slate-900/90">
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Lumière Landmark</p>
                <p className="text-sm font-medium dark:text-white">Central Business District</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}