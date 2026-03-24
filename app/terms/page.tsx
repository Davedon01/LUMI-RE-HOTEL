"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, Scale, Clock, Ban, HelpCircle, ArrowRight } from 'lucide-react';

export default function TermsAndConditions() {
  const lastUpdated = "March 24, 2026";

  const sections = [
    { id: "reservations", title: "Reservations", icon: <FileText size={20} /> },
    { id: "cancellations", title: "Cancellations", icon: <Clock size={20} /> },
    { id: "conduct", title: "Guest Conduct", icon: <ShieldCheck size={20} /> },
    { id: "liability", title: "Liability", icon: <Scale size={20} /> },
    { id: "privacy", title: "Data Privacy", icon: <Scale size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 dark:text-white">Terms of Service</h1>
          <p className="mt-4 text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
          <div className="mt-6 mx-auto h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          {/* Sidebar Navigation (Sticky) */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-28 space-y-2">
              <p className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Table of Contents</p>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition-all hover:bg-white hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                >
                  <span className="text-slate-300 group-hover:text-blue-500 transition-colors">
                    {section.icon}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Legal Content */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Section: Reservations */}
            <section id="reservations" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                  <FileText size={24} />
                </div>
                <h2 className="text-2xl font-light text-slate-900 dark:text-white">Reservations & Booking</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
                <p>By making a reservation through our website, you enter into a direct (legally binding) contractual relationship with our establishment. From the point at which you make your reservation, we act solely as an intermediary between you and the room availability system.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Valid credit card details are required to guarantee your booking.</li>
                  <li>Check-in is from 3:00 PM; Check-out is strictly by 11:00 AM.</li>
                  <li>The guest whose name is on the booking must be at least 18 years of age.</li>
                </ul>
              </div>
            </section>

            {/* Section: Cancellations */}
            <section id="cancellations" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 dark:bg-orange-900/20">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-light text-slate-900 dark:text-white">Cancellation Policy</h2>
              </div>
              <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>We understand that plans change. Our standard cancellation policy is as follows:</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                    <p className="text-[10px] font-black text-blue-600 uppercase mb-2">Full Refund</p>
                    <p className="text-sm">Cancellations made 48 hours or more before the check-in date.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white border border-slate-100 dark:bg-slate-900 dark:border-slate-800">
                    <p className="text-[10px] font-black text-orange-600 uppercase mb-2">50% Charge</p>
                    <p className="text-sm">Cancellations made within 24 to 48 hours of check-in.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section: Guest Conduct */}
            <section id="conduct" className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl font-light text-slate-900 dark:text-white">Guest Conduct & Responsibility</h2>
              </div>
              <div className="rounded-4xl bg-slate-900 p-8 text-white dark:bg-blue-900/10">
                <div className="flex gap-4 items-start">
                   <Ban className="text-red-400 shrink-0" size={20} />
                   <p className="text-sm leading-relaxed">Smoking is strictly prohibited in all indoor suites. A cleaning fee of $500 will be automatically charged to your card for violations. We maintain a strict "quiet hours" policy from 10:00 PM to 8:00 AM.</p>
                </div>
              </div>
            </section>

            {/* Help Footer */}
            <div className="mt-20 rounded-[2.5rem] bg-white p-10 text-center shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <HelpCircle className="mx-auto text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-light dark:text-white">Have questions about our terms?</h3>
              <p className="mt-2 text-sm text-slate-500">Our concierge team is available 24/7 to clarify any policies.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-slate-800 transition-all">
                  Contact Support <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}