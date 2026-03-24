"use client";

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ShieldCheck, ArrowLeft, Loader2, Edit3, Printer, Plus, Minus } from 'lucide-react';

// Room Images
import img1 from '../../public/Deluxe Ocean Suite.webp';
import img2 from '../../public/Panoramic Skyline Villa.webp';
import img3 from '../../public/Executive Garden Room.webp';
import img4 from '../../public/Junior-Urban-Suite.jpg';
import img5 from '../../public/Royal Penthouse.jpg';
import img6 from '../../public/Serene Pool Villa.jpg';

const ROOM_DATA = [
  { id: 1, name: "Deluxe Ocean Suite", price: 450, image: img1, maxGuests: 3 },
  { id: 2, name: "Panoramic Skyline Villa", price: 890, image: img2, maxGuests: 5 },
  { id: 3, name: "Executive Garden Room", price: 320, image: img3, maxGuests: 2 },
  { id: 4, name: "Junior Urban Suite", price: 380, image: img4, maxGuests: 2 },
  { id: 5, name: "Royal Penthouse", price: 1250, image: img5, maxGuests: 8 },
  { id: 6, name: "Serene Pool Villa", price: 750, image: img6, maxGuests: 4 }
];

function BookingContent() {
  const searchParams = useSearchParams();
  const roomIdParam = searchParams.get('roomId');
  
  const SERVICE_FEE = 140;

  // FIX: Force roomId to a number and use a fallback that makes sense
  const selectedRoom = useMemo(() => {
    const idToFind = Number(roomIdParam);
    return ROOM_DATA.find(r => r.id === idToFind) || ROOM_DATA[0];
  }, [roomIdParam]);

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Form and Guest State
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [bookingDetails, setBookingDetails] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const calculateTotals = useMemo(() => {
    const start = new Date(bookingDetails.checkIn);
    const end = new Date(bookingDetails.checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    const validNights = nights > 0 ? nights : 0;
    
    const extraGuests = (adults + children) > 2 ? (adults + children - 2) : 0;
    const extraGuestFee = extraGuests * 50 * validNights;

    const subtotal = (validNights * selectedRoom.price) + extraGuestFee;
    const total = subtotal > 0 ? subtotal + SERVICE_FEE : 0;
    
    return { nights: validNights, total, extraGuestFee };
  }, [bookingDetails.checkIn, bookingDetails.checkOut, selectedRoom, adults, children]);

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

  const handlePrint = () => {
    window.print();
  };

  if (isConfirmed) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-20 dark:bg-slate-950 animate-in fade-in zoom-in duration-500">
        <div id="receipt" className="w-full max-w-2xl rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800 print:shadow-none print:border-none print:p-0 print:text-black">
          <div className="flex flex-col items-center text-center pb-8 border-b border-slate-100 dark:border-slate-800">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
              <CheckCircle2 size={32} />
            </div>
            <h1 className="mt-4 text-3xl font-light text-slate-900 dark:text-white print:text-black">Booking Confirmed!</h1>
            <p className="mt-2 text-sm text-slate-500">Transaction ID: #LUM-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>

          <div className="py-8 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Guest Name</p>
              <p className="mt-1 font-medium text-slate-900 dark:text-white print:text-black">{bookingDetails.firstName} {bookingDetails.lastName}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Room Selection</p>
              <p className="mt-1 font-medium text-slate-900 dark:text-white print:text-black">{selectedRoom.name}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Dates</p>
              <p className="mt-1 font-medium text-slate-900 dark:text-white print:text-black">{bookingDetails.checkIn} — {bookingDetails.checkOut}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Occupancy</p>
              <p className="mt-1 font-medium text-slate-900 dark:text-white print:text-black">{adults} Adults, {children} Children</p>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 dark:border-slate-800 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Base Fare ({calculateTotals.nights} nights)</span>
              <span className="font-medium text-slate-900 dark:text-white print:text-black">${(calculateTotals.nights * selectedRoom.price).toLocaleString()}</span>
            </div>
            {calculateTotals.extraGuestFee > 0 && (
              <div className="flex justify-between">
                <span className="text-slate-500">Extra Guest Fees</span>
                <span className="font-medium text-slate-900 dark:text-white print:text-black">${calculateTotals.extraGuestFee.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-slate-500">Service & Taxes</span>
              <span className="font-medium text-slate-900 dark:text-white print:text-black">${SERVICE_FEE}</span>
            </div>
            <div className="flex justify-between border-t border-slate-100 pt-4 dark:border-slate-800 items-baseline">
              <span className="text-base font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black">Total Paid</span>
              <span className="text-3xl font-light text-blue-600 print:text-black">${calculateTotals.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 print:hidden">
          <button onClick={handlePrint} className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 hover:bg-slate-50 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-white dark:hover:bg-slate-800">
            <Printer size={16} /> Print Receipt
          </button>
          <button onClick={() => window.location.href = '/'} className="rounded-full bg-blue-600 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-blue-500/30 hover:bg-blue-500 transition-all">
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          <div className="lg:col-span-2 space-y-6 order-2 lg:order-1">
            <section className="rounded-[2.5rem] bg-white p-6 md:p-10 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <h2 className="text-2xl font-light text-slate-900 dark:text-white">Stay Details</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <InputGroup type="date" label="Check-In" name="checkIn" value={bookingDetails.checkIn} onChange={handleInputChange} />
                <InputGroup type="date" label="Check-Out" name="checkOut" min={bookingDetails.checkIn} value={bookingDetails.checkOut} onChange={handleInputChange} />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Counter label="Adults" value={adults} onIncrement={() => setAdults(p => p < selectedRoom.maxGuests ? p + 1 : p)} onDecrement={() => setAdults(p => p > 1 ? p - 1 : p)} />
                <Counter label="Children" value={children} onIncrement={() => setChildren(p => p < selectedRoom.maxGuests - adults ? p + 1 : p)} onDecrement={() => setChildren(p => p > 0 ? p - 1 : p)} />
              </div>
            </section>

            {step === 1 ? (
              <section className="animate-in fade-in slide-in-from-bottom-6 duration-500 rounded-[2.5rem] bg-white p-6 md:p-10 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <h2 className="text-2xl font-light text-slate-900 dark:text-white">Guest Information</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputGroup label="First Name" name="firstName" value={bookingDetails.firstName} onChange={handleInputChange} placeholder="Jean" />
                  <InputGroup label="Last Name" name="lastName" value={bookingDetails.lastName} onChange={handleInputChange} placeholder="Lumière" />
                  <div className="md:col-span-2">
                    <InputGroup label="Email Address" type="email" name="email" value={bookingDetails.email} onChange={handleInputChange} placeholder="guest@lumiere.com" />
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="mt-10 w-full rounded-full bg-slate-900 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white dark:bg-blue-600 hover:opacity-90 transition-opacity">Proceed to Payment</button>
              </section>
            ) : (
              <section className="animate-in fade-in slide-in-from-bottom-6 duration-500 rounded-[2.5rem] bg-white p-6 md:p-10 shadow-sm dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <button onClick={() => setStep(1)} className="mb-6 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"><ArrowLeft size={14}/> Change Details</button>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-light text-slate-900 dark:text-white">Payment</h2>
                    <ShieldCheck className="text-emerald-500" size={24} />
                </div>
                <div className="space-y-4">
                   <InputGroup label="Card Number" name="cardNumber" value={bookingDetails.cardNumber} onChange={handleInputChange} placeholder="0000 0000 0000 0000" />
                   <div className="grid grid-cols-2 gap-4">
                        <InputGroup label="Expiry" name="expiry" placeholder="MM/YY" value={bookingDetails.expiry} onChange={handleInputChange} />
                        <InputGroup label="CVC" name="cvc" placeholder="123" value={bookingDetails.cvc} onChange={handleInputChange} />
                   </div>
                </div>
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting || calculateTotals.nights <= 0}
                  className="mt-10 w-full rounded-full bg-blue-600 py-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white disabled:opacity-50 shadow-lg shadow-blue-500/20"
                >
                  {isSubmitting ? <Loader2 className="animate-spin mx-auto" /> : `Confirm & Pay $${calculateTotals.total.toLocaleString()}`}
                </button>
              </section>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-28 overflow-hidden rounded-[2.5rem] bg-white shadow-xl dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div className="relative h-56 w-full">
                <Image src={selectedRoom.image} alt={selectedRoom.name} fill className="object-cover" priority />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-tighter">${selectedRoom.price} / Night</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-light dark:text-white">{selectedRoom.name}</h3>
                    <Link href="/rooms" className="text-slate-400 hover:text-blue-600"><Edit3 size={18} /></Link>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Total Nights</span>
                    <span className="text-blue-600 font-black">{calculateTotals.nights}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Guests</span>
                    <span className="text-slate-900 dark:text-white">{adults}A, {children}C</span>
                  </div>
                  {calculateTotals.extraGuestFee > 0 && (
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                      <span className="text-slate-400">Extra Guest Subtotal</span>
                      <span className="text-slate-900 dark:text-white">${calculateTotals.extraGuestFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Service Fee</span>
                    <span className="dark:text-white">${SERVICE_FEE}</span>
                  </div>
                  <div className="mt-6 border-t border-slate-100 pt-6 flex justify-between items-baseline dark:border-slate-800">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] dark:text-white">Total</span>
                    <span className="text-3xl font-light text-blue-600">${calculateTotals.total.toLocaleString()}</span>
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

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-blue-600" /></div>}>
      <BookingContent />
    </Suspense>
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

function Counter({ label, value, onIncrement, onDecrement }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</span>
        <p className="text-xl font-light text-slate-900 dark:text-white">{value}</p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" onClick={onDecrement} className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-white"><Minus size={16} /></button>
        <button type="button" onClick={onIncrement} className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"><Plus size={16} /></button>
      </div>
    </div>
  );
}