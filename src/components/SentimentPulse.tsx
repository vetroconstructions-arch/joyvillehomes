"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Info, BarChart3, TrendingUp, ShieldCheck } from 'lucide-react';

interface SentimentPulseProps {
    ratings: {
        connectivity: number;
        amenities: number;
        valueForMoney: number;
        constructionQuality: number;
    };
    summary: string;
}

const SentimentPulse: React.FC<SentimentPulseProps> = ({ ratings, summary }) => {
    const metrics = [
        { label: 'Connectivity', value: ratings.connectivity, icon: <TrendingUp size={14} />, color: 'bg-blue-500' },
        { label: 'Amenities', value: ratings.amenities, icon: <BarChart3 size={14} />, color: 'bg-teal-500' },
        { label: 'Value', value: ratings.valueForMoney, icon: <TrendingUp size={14} />, color: 'bg-indigo-500' },
        { label: 'Construction', value: ratings.constructionQuality, icon: <ShieldCheck size={14} />, color: 'bg-emerald-500' },
    ];

    return (
        <section className="my-16 border border-[#F0F0F0] rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="bg-[#FAFAFA] px-6 py-4 border-b border-[#F0F0F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <h3 className="font-semibold text-sm tracking-tight text-[#323334]">Sentiment Pulse™</h3>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-medium tracking-wider uppercase">
                    <Info size={12} />
                    Expert Review Protocol 2.6
                </div>
            </div>
            
            <div className="p-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className="text-xs font-bold text-[#1D4F9C] uppercase tracking-widest">Executive Summary</p>
                        <p className="text-sm leading-relaxed text-[#555] font-light italic">
                            &quot;{summary}&quot;
                        </p>
                    </div>
                    
                    <div className="pt-4 grid grid-cols-2 gap-4">
                        <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50">
                            <span className="block text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-1">AI Recommendation</span>
                            <span className="text-xs text-blue-900 font-medium">High Institutional Demand</span>
                        </div>
                        <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
                            <span className="block text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1">SGE Extractivity</span>
                            <span className="text-xs text-emerald-900 font-medium">98.4% Confidence</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-5">
                    {metrics.map((metric, idx) => (
                        <div key={metric.label}>
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="flex items-center gap-2 text-[11px] font-bold text-[#323334] uppercase tracking-wide">
                                    {metric.icon}
                                    {metric.label}
                                </span>
                                <span className="text-xs font-bold text-[#1D4F9C]">{metric.value}/5.0</span>
                            </div>
                            <div className="h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${(metric.value / 5) * 100}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className={`h-full ${metric.color} rounded-full`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="px-6 py-3 bg-[#F9FAFB] border-t border-[#F0F0F0] text-center">
                <p className="text-[10px] text-gray-500 font-light">
                    This data is processed through our <span className="font-semibold text-[#1D4F9C]">Real-Time Sentiment Mesh</span> and establishes semantic project-authority in search knowledge graphs.
                </p>
            </div>
        </section>
    );
};

export default SentimentPulse;
