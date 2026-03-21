"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    name: "Alexander Wright",
    role: "Business Traveller",
    content: "The attention to detail is simply unparalleled. From the scent in the lobby to the seamless check-in, Lumière defines modern luxury.",
    rating: 5
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Lifestyle Blogger",
    content: "The Infinity Pool at sunset is a religious experience. I've stayed in hotels across the globe, but this dark-blue aesthetic is truly unique.",
    rating: 5
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Couples Retreat",
    content: "A perfect sanctuary. The soundproofing in the Ocean Suite is incredible—it felt like we were the only people in the world.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // UseCallback ensures the function doesn't change on every render
  const next = useCallback(() => {
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  // Automatic Rotation Logic
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000); // Switches every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, [next]);

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Decorative Background Icon */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">Guest Stories</h2>
        
        <div className="mt-12 min-h-87.5 md:min-h-75 flex flex-col items-center justify-center">
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className={`transition-all duration-1000 ease-in-out ${
                index === current 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "absolute opacity-0 scale-95 translate-y-4 pointer-events-none"
              }`}
            >
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="text-2xl font-light italic leading-relaxed text-slate-800 dark:text-slate-200 md:text-3xl">
                "{review.content}"
              </blockquote>

              <div className="mt-8">
                <p className="text-lg font-bold tracking-wide text-slate-900 dark:text-white">
                  {review.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="mt-12 flex items-center justify-center gap-8">
          <button 
            onClick={prev}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:hover:bg-blue-600 dark:text-slate-400"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-3">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === current ? "w-10 bg-blue-600" : "w-3 bg-slate-200 dark:bg-slate-800"
                }`}
              />
            ))}
          </div>

          <button 
            onClick={next}
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 transition-all hover:bg-slate-900 hover:text-white dark:border-slate-800 dark:hover:bg-blue-600 dark:text-slate-400"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}