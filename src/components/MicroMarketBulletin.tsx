"use client";

import { motion } from 'framer-motion';
import { Radio, ArrowUpRight, Zap, Clock } from 'lucide-react';
import { localities } from '@/data/localities';

export default function MicroMarketBulletin() {
    const bulletins = localities.filter(l => l.weeklyInfraUpdate);

    return (
        <section className="bg-white border-y border-[#C5A059]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto py-4 px-6">
                <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1D4F9C]">
                        Weekly Infrastructure Pulse
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {bulletins.map((loc, idx) => (
                        <motion.div 
                            key={loc.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#EEF2F6] p-4 flex gap-4 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#1D4F9C]">
                                <Zap size={18} />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#323334]/50">{loc.name}</span>
                                    <span className="text-[8px] flex items-center gap-1 text-[#323334]/40 font-mono">
                                        <Clock size={10} /> {loc.weeklyInfraUpdate?.date}
                                    </span>
                                </div>
                                <h4 className="text-sm font-serif text-[#323334] mb-1 group-hover:text-[#1D4F9C] transition-colors">
                                    {loc.weeklyInfraUpdate?.title}
                                </h4>
                                <p className="text-[11px] font-light text-[#323334]/70 leading-relaxed">
                                    {loc.weeklyInfraUpdate?.description}
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-tighter ${
                                        loc.weeklyInfraUpdate?.status === 'Progress' 
                                        ? 'bg-blue-100 text-blue-700' 
                                        : 'bg-green-100 text-green-700'
                                    }`}>
                                        {loc.weeklyInfraUpdate?.status}
                                    </span>
                                    <div className="flex-grow h-[1px] bg-[#C5A059]/20"></div>
                                    <ArrowUpRight size={12} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
