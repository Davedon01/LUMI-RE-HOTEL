"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitch from "@/app/context/ThemeSwitch";
import logo from "@/public/Lumiere_hotel_logo-removebg-preview.png";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-40 w-full transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between rounded-2xl border border-white/20 bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md dark:border-slate-800/50 dark:bg-slate-950/70">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <NavLink href="/">
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                LUMIÈRE<span className="text-blue-500">HOTEL</span>
              </span>
                {/* <Image
                  src={logo}
                  alt="Lumière Hotel Logo"
                  width={140} // Adjust this based on your logo's aspect ratio
                  height={40} // Adjust this based on your logo's aspect ratio
                  className="h-8 w-auto object-contain dark:invert" // Keeps it sharp and correctly sized
                  priority // Ensures the logo loads instantly (good for SEO/LCP)
                /> */}
              </NavLink>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <NavLink href="rooms">Rooms</NavLink>
              <NavLink href="amenities">Amenities</NavLink>
              <NavLink href="gallery">Gallery</NavLink>
              <ThemeSwitch />
              <NavLink href="booking">
                <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-slate-700 dark:bg-blue-600 dark:hover:bg-blue-500">
                  Book Now
                </button>
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-slate-900 dark:text-slate-50 p-1"
              >
                <Menu size={28} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop shade */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* The Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-70 border-l border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-500 ease-in-out dark:border-slate-800/50 dark:bg-slate-950/10 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <ThemeSwitch />
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-900 dark:text-slate-50"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              <MobileNavLink href="rooms" onClick={() => setIsOpen(false)}>
                Rooms
              </MobileNavLink>
              <MobileNavLink href="amenities" onClick={() => setIsOpen(false)}>
                Amenities
              </MobileNavLink>
              <MobileNavLink href="gallery" onClick={() => setIsOpen(false)}>
                Gallery
              </MobileNavLink>
            </nav>

            <div className="mt-auto">
              <NavLink href="booking">
                <button className="w-full rounded-xl bg-slate-900 py-4 font-semibold text-white shadow-lg transition-transform active:scale-95 dark:bg-blue-600">
                  Book Now
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-semibold text-slate-900 dark:text-slate-50 hover:text-blue-500 transition-colors"
    >
      {children}
    </a>
  );
}
