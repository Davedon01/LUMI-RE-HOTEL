"use client";

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // FontAwesome set
import { LuArrowUp } from 'react-icons/lu'; // Keep Lucide for general UI icons like arrows

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 pt-24 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-6">
            <span className="text-2xl font-bold tracking-tighter text-white">
              LUMIÈRE<span className="text-blue-500">HOTEL</span>
            </span>
            <p className="text-sm leading-relaxed">
              Experience the pinnacle of urban luxury. A sanctuary designed for those who seek the extraordinary in every stay.
            </p>
            {/* New Social Media Row using React-Icons */}
            <div className="flex gap-4">
              <SocialIcon icon={<FaInstagram size={18} />} />
              <SocialIcon icon={<FaFacebookF size={18} />} />
              <SocialIcon icon={<FaTwitter size={18} />} />
              <SocialIcon icon={<FaLinkedinIn size={18} />} />
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/rooms">Rooms & Suites</FooterLink></li>
              <li><FooterLink href="/amenities">Dining</FooterLink></li>
              <li><FooterLink href="/amenities">Wellness & Spa</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#">Private Events</FooterLink></li>
              <li><FooterLink href="#">Concierge</FooterLink></li>
              <li><FooterLink href="#">Airport Transfer</FooterLink></li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-slate-300">123 Lumière Blvd, Central District</li>
              <li className="text-slate-300">+234 800 LUMIERE</li>
              <li className="text-slate-300">reservations@lumiere.com</li>
            </ul>
            
            <button 
              onClick={scrollToTop}
              className="absolute -right-4 bottom-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:scale-110 active:scale-95 lg:right-0"
            >
              <LuArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs tracking-wide">
              © 2026 Lumière Hotel Group. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs font-medium uppercase tracking-widest">
              <a href="/policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="transition-all hover:pl-2 hover:text-white">
      {children}
    </a>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 text-slate-400 transition-all hover:border-blue-500 hover:bg-blue-600 hover:text-white">
      {icon}
    </a>
  );
}