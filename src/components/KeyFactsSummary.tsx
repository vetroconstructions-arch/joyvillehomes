"use client";

import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

interface KeyFactsSummaryProps {
    takeaways: string[];
}

export default function KeyFactsSummary({ takeaways }: KeyFactsSummaryProps) {
    if (!takeaways || takeaways.length === 0) return null;

    return (
        <div className="bg-[#FFFFFF] border-y border-[#C5A059]/30 py-8 px-6 md:px-12 mb-12 shadow-sm relative overflow-hidden">
            {/* Background minimal pattern for premium feel */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF2F6] rounded-bl-full pointer-events-none opacity-50" />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1D4F9C]/10 flex items-center justify-center">
                        <Zap size={16} className="text-[#1D4F9C]" />
                    </div>
                    <h2 className="text-sm font-serif text-[#323334] tracking-wide uppercase">AI Summary: Key Takeaways</h2>
                </div>
                
                <ul className="space-y-4">
                    {takeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                            <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0 mt-0.5" />
                            <p className="text-[#323334]/80 text-sm md:text-base font-light leading-relaxed">
                                {point}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
