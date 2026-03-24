"use client";

import React from 'react';
import { ShieldCheck, Lock, Database, UserCheck, BellOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors mb-12">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <header className="mb-16">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/20 mb-6">
            <ShieldCheck size={30} />
          </div>
          <h1 className="text-4xl font-light text-slate-900 dark:text-white">Privacy Policy</h1>
          <p className="mt-4 text-slate-500">How we protect your presence at our suites.</p>
        </header>

        <div className="space-y-12 text-slate-600 dark:text-slate-400 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Database size={20} className="text-blue-500" /> Data Collection
            </h2>
            <p>We collect information only when you interact with our booking engine or concierge services. This includes your name, contact information, and specific preferences to tailor your stay experience.</p>
          </section>

          <section className="rounded-4xl bg-slate-50 p-8 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <Lock size={20} className="text-blue-500" /> Security Standards
            </h2>
            <p>All financial transactions are handled through PCI-DSS compliant gateways. We do not store raw credit card numbers on our infrastructure. Your data is encrypted both in transit and at rest.</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-3">
              <UserCheck size={20} className="text-blue-500" /> Your Rights
            </h2>
            <p>You have the right to request a copy of your data, or ask for its deletion after your stay is completed. To exercise these rights, please contact our privacy officer via the help center.</p>
          </section>

          <footer className="border-t border-slate-100 pt-12 dark:border-slate-800">
            <p className="text-sm italic">This policy was last updated March 2026. We reserve the right to modify this policy at any time to reflect changes in our services or legal obligations.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}