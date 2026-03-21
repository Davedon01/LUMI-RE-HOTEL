"use client";

import React from 'react';
import { Send, BellRing } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background Image / Pattern */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[0.5] opacity-20 dark:opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551882547-ff43c63efe9c?q=80&w=2070&auto=format&fit=crop')" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/40 p-8 shadow-2xl backdrop-blur-2xl dark:border-slate-800/50 dark:bg-slate-900/60 md:p-16">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            
            {/* Text Content */}
            <div className="max-w-md text-center lg:text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                <BellRing size={24} />
              </div>
              <h2 className="text-3xl font-light tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
                Join the <span className="italic font-serif">Lumière</span> Circle
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Receive exclusive offers, seasonal event invites, and a first look at our newest global retreats.
              </p>
            </div>

            {/* Signup Form */}
            <div className="w-full max-w-md">
              <form className="relative flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative w-full">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-slate-200 bg-white/50 px-6 py-4 text-slate-900 placeholder-slate-500 transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-50 dark:placeholder-slate-400"
                  />
                </div>
                <button 
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Join
                  <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400 lg:text-left">
                Unsubscribe at any time. View our <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}