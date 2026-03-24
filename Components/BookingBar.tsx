"use client";

import React, { useState } from 'react';
import { Calendar, Users, Search, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function BookingBar() {
  // State for guest selection
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  return (
    <div className="relative z-30 mx-auto -mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Container with iOS Glassmorphism */}
      <div className="rounded-4xl border border-white/20 bg-white/70 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/80">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          
          {/* Check In */}
          <div className="flex w-full flex-col border-b border-slate-200 pb-2 lg:w-1/4 lg:border-b-0 lg:border-r lg:pb-0 dark:border-slate-700">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              <Calendar size={14} className="text-blue-500" /> Check In
            </label>
            <input 
              type="date" 
              defaultValue={new Date().toISOString().split('T')[0]}
              className="w-full bg-transparent py-1 text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50 scheme-light dark:scheme-dark"
            />
          </div>

          {/* Check Out */}
          <div className="flex w-full flex-col border-b border-slate-200 pb-2 lg:w-1/4 lg:border-b-0 lg:border-r lg:pb-0 dark:border-slate-700">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              <Calendar size={14} className="text-blue-500" /> Check Out
            </label>
            <input 
              type="date" 
              defaultValue={new Date(Date.now() + 86400000).toISOString().split('T')[0]}
              className="w-full bg-transparent py-1 text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50 scheme-light dark:scheme-dark"
            />
          </div>

          {/* Guests with Custom Dropdown */}
          <div className="relative flex w-full flex-col lg:w-1/4">
            <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <Users size={14} className="text-blue-500" /> Guests
            </label>
            <button 
              onClick={() => setShowGuestDropdown(!showGuestDropdown)}
              className="flex w-full bg-transparent py-1 text-left text-sm font-semibold text-slate-900 focus:outline-none dark:text-slate-50"
            >
              {adults} Adults, {children} Children
            </button>

            {/* Guest Selection Popover */}
            {showGuestDropdown && (
              <div className="absolute top-full left-0 mt-4 w-64 rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-top-2">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Adults</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setAdults(Math.max(1, adults - 1))} className="p-1 rounded-full border dark:border-slate-700"><Minus size={12}/></button>
                      <span className="text-sm font-bold dark:text-white">{adults}</span>
                      <button onClick={() => setAdults(adults + 1)} className="p-1 rounded-full border dark:border-slate-700"><Plus size={12}/></button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Children</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setChildren(Math.max(0, children - 1))} className="p-1 rounded-full border dark:border-slate-700"><Minus size={12}/></button>
                      <span className="text-sm font-bold dark:text-white">{children}</span>
                      <button onClick={() => setChildren(children + 1)} className="p-1 rounded-full border dark:border-slate-700"><Plus size={12}/></button>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGuestDropdown(false)}
                  className="mt-4 w-full rounded-xl bg-slate-900 py-2 text-[10px] font-bold text-white dark:bg-blue-600"
                >
                  Done
                </button>
              </div>
            )}
          </div>

          {/* Search Button */}
          <Link 
            href={{
              pathname: '/rooms',
              query: { adults: adults, children: children },
            }}
            className="w-full lg:w-auto"
          >
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95 lg:w-auto lg:px-10 dark:bg-blue-600 dark:hover:bg-blue-500">
              <Search size={18} />
              Check Availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}