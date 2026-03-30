"use client";

import React from 'react';
import { Landmark, TrendingUp, ShieldCheck, Map, ArrowRight } from 'lucide-react';

export default function LandIntelligenceMasterclass() {
    const insights = [
        {
            title: "East Pune Growth Corridor",
            desc: "The Loni-Kalbhor to Saswad belt is witnessing a 400% surge in logistical and industrial investment.",
            icon: <Map className="text-[#C5A059]" size={20} />
        },
        {
            title: "Airport Appreciation Catalyst",
            desc: "NA Plots typically see a 3x value jump within 12 months of airport foundation groundbreaking.",
            icon: <TrendingUp className="text-[#1D4F9C]" size={20} />
        },
        {
            title: "Clear Title Mastery",
            desc: "Shapoorji Pallonji guarantees 100% Collector NA, RERA-certified, clear title land assets.",
            icon: <ShieldCheck className="text-green-600" size={20} />
        }
    ];

    return (
        <section className="my-24 p-10 bg-[#FFFFFF] border-2 border-[#1D4F9C]/10 rounded-sm shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <Landmark className="text-[#1D4F9C]" size={28} />
                    <h2 className="text-3xl font-serif text-[#323334]">Land Investment Masterclass: NA Plots</h2>
                </div>
                
                <p className="text-lg text-[#1A1A1A] font-light mb-12 max-w-3xl leading-relaxed">
                    Investing in NA (Non-Agricultural) plots is the highest-alpha strategy in Pune&apos;s current market. Unlike apartments, land offers <span className="font-medium">zero depreciation</span> and <span className="font-medium">100% architectural freedom</span>.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((item, idx) => (
                        <div key={idx} className="p-6 bg-[#F8FAFC] border border-[#E5E7EB] hover:border-[#C5A059]/40 transition-all group">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1D4F9C] mb-3">{item.title}</h3>
                            <p className="text-xs text-[#323334] leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1">
                        <h4 className="text-xl font-serif text-[#1D4F9C] mb-2">Dominating the South-East Corridor</h4>
                        <p className="text-sm text-[#323334]/70 font-light">
                            With the Purandar Airport and Ring Road Phase 2, the South-East quadrant is the new epicenter of Pune&apos;s real estate wealth.
                        </p>
                    </div>
                    <button className="bg-[#1D4F9C] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#153a74] transition-all flex items-center gap-3">
                        Request Plot Inventory <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
