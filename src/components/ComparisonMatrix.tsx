"use client";

import React from 'react';
import { 
    CheckCircle2, 
    TrendingUp, 
    Shield, 
    Activity, 
    ArrowRight 
} from 'lucide-react';

interface ComparisonItem {
    label: string;
    joyvilleValue: string;
    sectorAvg: string;
    advantage: string;
}

interface ComparisonMatrixProps {
    items: ComparisonItem[];
    projectName: string;
}

export default function ComparisonMatrix({ items, projectName }: ComparisonMatrixProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="my-16 scroll-mt-32" id="comparison-matrix">
            <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                <h2 className="text-2xl font-serif text-[#323334] font-light">
                    Sovereign Value: {projectName} vs. Sector Benchmark
                </h2>
            </div>

            <div className="overflow-hidden border border-[#C5A059]/20 rounded-sm bg-[#FFFFFF] shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#EEF2F6] border-b border-[#C5A059]/20">
                                <th className="p-5 text-[10px] uppercase tracking-widest text-[#1D4F9C] font-bold">Value Metric</th>
                                <th className="p-5 text-[10px] uppercase tracking-widest text-[#1D4F9C] font-bold">{projectName}</th>
                                <th className="p-5 text-[10px] uppercase tracking-widest text-[#323334]/40 font-bold text-center">Sector Avg</th>
                                <th className="p-5 text-[10px] uppercase tracking-widest text-[#C5A059] font-bold text-right">Strategic Edge</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#C5A059]/10">
                            {items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-[#C5A059]/5 transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            {idx % 3 === 0 ? <TrendingUp size={14} className="text-[#1D4F9C]/60" /> : 
                                             idx % 3 === 1 ? <Shield size={14} className="text-[#1D4F9C]/60" /> : 
                                             <Activity size={14} className="text-[#1D4F9C]/60" />}
                                            <span className="text-sm font-medium text-[#323334]">{item.label}</span>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-[#1D4F9C]" />
                                            <span className="text-sm font-bold text-[#1D4F9C]">{item.joyvilleValue}</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-center">
                                        <span className="text-xs text-[#323334]/60 font-light">{item.sectorAvg}</span>
                                    </td>
                                    <td className="p-5 text-right">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-full">
                                            <span className="text-[10px] font-bold text-[#C5A059] uppercase tracking-tighter">{item.advantage}</span>
                                            <ArrowRight size={10} className="text-[#C5A059] translate-x-0 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="mt-4 text-[10px] text-[#323334]/40 italic font-light">
                *Sector benchmarks based on Pune micro-market liquidity reports (Q1 2026). Technical superiority verified by institutional audit.
            </p>
        </section>
    );
}
