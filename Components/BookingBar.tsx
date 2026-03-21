"use client";

import React from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import Link from 'next/link';

export default function BookingBar() {
  return (
    <div className="relative z-30 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Container with iOS Glassmorphism */}
      <div className="rounded-3xl border border-white/20 bg-white/70 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/80">
        <form className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          
          {/* Check In */}
          <div className="flex w-full flex-col border-b border-slate-200 pb-2 lg:w-1/4 lg:border-b-0 lg:border-r lg:pb-0 dark:border-slate-700">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Calendar size={14} className="text-blue-500" /> Check In
            </label>
            <input 
              type="date" 
              className="w-full bg-transparent py-1 text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50 scheme-light dark:scheme-dark"
            />
          </div>

          {/* Check Out */}
          <div className="flex w-full flex-col border-b border-slate-200 pb-2 lg:w-1/4 lg:border-b-0 lg:border-r lg:pb-0 dark:border-slate-700">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Calendar size={14} className="text-blue-500" /> Check Out
            </label>
            <input 
              type="date" 
              className="w-full bg-transparent py-1 text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50 scheme-light dark:scheme-dark"
            />
          </div>

          {/* Guests */}
          <div className="flex w-full flex-col lg:w-1/4">
            <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <Users size={14} className="text-blue-500" /> Guests
            </label>
            <select className="w-full bg-transparent py-1 text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50 cursor-pointer">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">2 Adults, 1 Child</option>
              <option value="4">Family (4+)</option>
            </select>
          </div>

          {/* Search Button */}
          <Link href="/booking">
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 py-4 text-sm font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 lg:w-auto lg:px-10 dark:bg-blue-600 dark:hover:bg-blue-500">
            <Search size={18} />
            Check Availability
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}