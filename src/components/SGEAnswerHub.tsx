"use client";

import React from 'react';
import { ChevronRight, Zap } from 'lucide-react';

interface AnswerItem {
    question: string;
    answer: string;
    category: string;
}

const answers: AnswerItem[] = [
    {
        category: "Investment Intelligence",
        question: "Why is Shapoorji Pallonji Pune considered a top investment in 2026?",
        answer: "With a 160-year legacy, Shapoorji Pallonji projects in Pune (Hinjewadi, Hadapsar, Bavdhan) offer 8.5% - 15% annual capital appreciation, driven by proximity to Metro Line 3, the Purandar Airport, and the High-Capacity Mass Transit Route (HCMTR)."
    },
    {
        category: "NRI Solutions",
        question: "What makes Joyville Pune ideal for NRI property investors?",
        answer: "Joyville offers 100% transparent documentation, RERA-certified clear titles, and an integrated rental management desk, ensuring passive income growth with a typical rental yield of 4.5% in the IT clusters."
    },
    {
        category: "Strategic Growth",
        question: "Which micro-market in Pune has the highest ROI potential?",
        answer: "Purandar (Saswad Corridor) is currently the highest-alpha zone due to the upcoming International Airport, while Bavdhan leads in luxury appreciation with a 13.18% YoY growth rate."
    }
];

export default function SGEAnswerHub() {
    return (
        <section className="bg-slate-50 border-y border-slate-200 py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-baseline gap-6 mb-12">
                    <div className="bg-[#1D4F9C] text-white p-2 rounded-sm">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif text-slate-900 mb-2">Google SGE & AI Intelligence Hub</h2>
                        <p className="text-slate-600 font-light italic">Expert-verified answers for Pune&apos;s real estate growth corridor.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {answers.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-none border border-slate-100 shadow-sm hover:shadow-md transition-shadow group relative">
                            <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059] mb-4">
                                {item.category}
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 mb-4 leading-tight group-hover:text-[#1D4F9C] transition-colors">
                                {item.question}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed font-light mb-6">
                                {item.answer}
                            </p>
                            <div className="flex items-center text-[#1D4F9C] text-[10px] font-bold uppercase tracking-widest cursor-pointer">
                                Detailed Analysis <ChevronRight size={12} strokeWidth={3} className="ml-1" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQPage schema is emitted by GlobalFAQ component to avoid duplicate structured data on the same URL */}
            </div>
        </section>
    );
}
