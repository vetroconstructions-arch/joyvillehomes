'use client';

import React from 'react';
import { comparisons } from '@/data/comparisons';
import { ShieldCheck, Trophy, Info } from 'lucide-react';

export default function ProjectComparison({ comparisonId }: { comparisonId: string }) {
    const data = comparisons.find(c => c.id === comparisonId);

    if (!data) return null;

    return (
        <section className="mt-24 p-8 bg-white border border-[#1D4F9C]/10 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
                <div className="text-center md:text-left">
                    <p className="text-[10px] font-bold text-[#C5A059] uppercase tracking-[0.3em] mb-2">Market Authority Battle</p>
                    <h3 className="text-3xl font-serif text-[#1D4F9C]">Head-to-Head Comparison</h3>
                </div>
                <div className="flex items-center gap-4 bg-[#EEF2F6] px-6 py-3 rounded-full border border-[#1D4F9C]/10">
                    <ShieldCheck className="text-[#1D4F9C]" size={20} />
                    <span className="text-xs font-bold text-[#323334]">Verified Market Data 2026</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#1D4F9C]/10 pb-4">
                        <span className="text-lg font-serif text-[#1D4F9C]">{data.joyvilleProject}</span>
                        <span className="text-[10px] font-bold bg-[#1D4F9C] text-white px-3 py-1 rounded-sm uppercase">Anchor</span>
                    </div>
                    {data.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-[#323334]/60">{m.label}</span>
                            <span className={`font-bold ${m.winner === 'joyville' ? 'text-green-600 flex items-center gap-2' : 'text-[#323334]'}`}>
                                {m.joyville} {m.winner === 'joyville' && <Trophy size={14} />}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="space-y-6 opacity-70">
                    <div className="flex items-center justify-between border-b border-[#323334]/10 pb-4">
                        <span className="text-lg font-serif text-[#323334]">{data.competitorProject}</span>
                        <span className="text-[10px] font-bold bg-[#323334] text-white px-3 py-1 rounded-sm uppercase">Competitor</span>
                    </div>
                    {data.metrics.map((m, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-[#323334]/60">{m.label}</span>
                            <span className={`font-bold ${m.winner === 'competitor' ? 'text-green-600 flex items-center gap-2' : 'text-[#323334]'}`}>
                                {m.competitor} {m.winner === 'competitor' && <Trophy size={14} />}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 p-6 bg-[#1D4F9C]/5 border-l-4 border-[#C5A059] rounded-sm">
                <div className="flex items-start gap-4">
                    <Info className="text-[#1D4F9C] mt-1 shrink-0" size={20} />
                    <p className="text-sm text-[#323334]/80 leading-relaxed italic">
                        <strong className="text-[#1D4F9C] not-italic">Analyst Verdict:</strong> {data.summary}
                    </p>
                </div>
            </div>
        </section>
    );
}
