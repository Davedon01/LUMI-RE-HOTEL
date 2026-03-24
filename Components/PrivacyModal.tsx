"use client";

import React from 'react';
import { X, ShieldCheck, Lock, Eye, Bell, Globe } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl dark:bg-slate-900 animate-in zoom-in-95 duration-300 border border-slate-100 dark:border-slate-800">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-50 p-6 px-8 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h2 className="text-lg font-light text-slate-900 dark:text-white">Privacy Summary</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your data, protected</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-900 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="max-h-[60vh] overflow-y-auto p-8 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          <div className="grid gap-8">
            <div className="flex gap-4">
              <Lock className="shrink-0 text-blue-500" size={18} />
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Secure Transactions</p>
                <p>We use industry-standard SSL encryption. Your payment details are processed by secure providers and are never stored on our local servers.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Eye className="shrink-0 text-blue-500" size={18} />
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Information We Collect</p>
                <p>We only collect data necessary for your stay: name, contact details, and dietary or accessibility preferences you share.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Globe className="shrink-0 text-blue-500" size={18} />
              <div>
                <p className="font-bold text-slate-900 dark:text-white mb-1">Third Party Sharing</p>
                <p>Your data is never sold. It is only shared with essential partners (like local tour operators you book through us).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-6 px-8 dark:bg-slate-950/50 text-center">
          <button 
            onClick={onClose}
            className="w-full rounded-full bg-slate-900 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:opacity-90 transition-opacity dark:bg-blue-600"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}