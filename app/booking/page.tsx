"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Calendar, Users, CreditCard, ChevronRight, CheckCircle2, ShieldCheck, ArrowLeft, Loader2 } from 'lucide-react';

import imgHero from '../../public/Royal Penthouse.jpg';

export default function BookingPage() {
  const NIGHTLY_RATE = 1250;
  const SERVICE_FEE = 140;

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // 1. Date & Form State
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: new Date().toISOString().split('T')[0], // Defaults to today
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Defaults to tomorrow
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  // 2. Calculate Nights & Total
  const calculateTotals = useMemo(() => {
    const start = new Date(bookingDetails.checkIn);
    const end = new Date(bookingDetails.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const validNights = nights > 0 ? nights : 0;
    const subtotal = validNights * NIGHTLY_RATE;
    const total = subtotal > 0 ? subtotal + SERVICE_FEE : 0;

    return { nights: validNights, total };
  }, [bookingDetails.checkIn, bookingDetails.checkOut]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (calculateTotals.nights <= 0) return alert("Please select a valid checkout date.");
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center dark:bg-slate-950">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="mt-8 text-4xl font-light text-slate-900 dark:text-white">Reservation Confirmed</h1>
        <p className="mt-4 text-slate-500 dark:text-slate-400">Total Paid: <span className="font-bold text-blue-600">${calculateTotals.total.toLocaleString()}</span></p>
        <button onClick={() => window.location.href = '/'} className="mt-10 rounded-full bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white dark:bg-blue-600">Return to Home</button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          
          {/* Main Form Section */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* DATE SELECTION BLOCK */}
            <section className="rounded-[2.5rem] bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-light text-slate-900 dark:text-slate-50">Select Dates</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Check-In</label>
                  <input 
                    type="date" 
                    name="checkIn"
                    value={bookingDetails.checkIn}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Check-Out</label>
                  <input 
                    type="date" 
                    name="checkOut"
                    min={bookingDetails.checkIn}
                    value={bookingDetails.checkOut}
                    onChange={handleInputChange}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>
            </section>

            {/* Step Content Switcher */}
            {step === 1 ? (
              <section className="animate-in fade-in slide-in-from-bottom-4 rounded-[2.5rem] bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-light text-slate-900 dark:text-slate-50">Guest Information</h2>
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <InputGroup label="First Name" name="firstName" value={bookingDetails.firstName} onChange={handleInputChange} placeholder="Jean" />
                  <InputGroup label="Last Name" name="lastName" value={bookingDetails.lastName} onChange={handleInputChange} placeholder="Lumière" />
                </div>
                <button 
                  type="button"
                  onClick={() => setStep(2)}
                  className="mt-8 w-full rounded-full bg-slate-900 py-6 text-xs font-bold uppercase tracking-widest text-white dark:bg-blue-600"
                >
                  Proceed to Payment
                </button>
              </section>
            ) : (
              <section className="animate-in fade-in slide-in-from-bottom-4 rounded-[2.5rem] bg-white p-8 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <button onClick={() => setStep(1)} className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase text-slate-400"><ArrowLeft size={14}/> Change Details</button>
                <h2 className="text-2xl font-light text-slate-900 dark:text-slate-50">Payment</h2>
                <div className="mt-8 space-y-4">
                   <InputGroup label="Card Number" name="cardNumber" value={bookingDetails.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || calculateTotals.nights <= 0}
                  className="mt-8 w-full rounded-full bg-blue-600 py-6 text-xs font-bold uppercase tracking-widest text-white disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : `Pay $${calculateTotals.total.toLocaleString()}`}
                </button>
              </section>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 overflow-hidden rounded-[3rem] bg-white shadow-xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="relative h-48 w-full">
                <Image src={imgHero} alt="Room" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-light dark:text-white">Royal Penthouse</h3>
                
                <div className="mt-8 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Price per night</span>
                    <span className="dark:text-white">${NIGHTLY_RATE}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Total Nights</span>
                    <span className="font-bold text-blue-600">{calculateTotals.nights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Service Fee</span>
                    <span className="dark:text-white">${SERVICE_FEE}</span>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-6 flex justify-between dark:border-slate-800">
                    <span className="text-lg font-light dark:text-white">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">${calculateTotals.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function InputGroup({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</label>
      <input {...props} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm focus:border-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white" />
    </div>
  );
}