"use client";

import { TrendingUp, TrendingDown, Activity, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

interface PriceIntelligenceCardProps {
    priceTrend?: {
        yoyGrowth: string;
        currentAvgPrice: string;
    };
    infrastructureScores?: {
        metro: number;
        ringRoad: number;
        itHub: number;
    };
    projectName: string;
    location: string;
}

export default function PriceIntelligenceCard({ priceTrend, infrastructureScores, projectName, location }: PriceIntelligenceCardProps) {
    if (!priceTrend) return null;

    const growthValue = parseFloat(priceTrend.yoyGrowth.replace(/[^0-9.-]/g, ''));
    const isPositive = growthValue > 0;
    const infraTotal = infrastructureScores
        ? ((infrastructureScores.metro + infrastructureScores.ringRoad + infrastructureScores.itHub) / 3).toFixed(1)
        : null;

    // Investment window logic
    const getInvestmentSignal = () => {
        if (growthValue >= 12) return { label: 'HIGH DEMAND', color: 'text-red-500 bg-red-50 border-red-200', pulse: true };
        if (growthValue >= 8) return { label: 'STRONG GROWTH', color: 'text-amber-600 bg-amber-50 border-amber-200', pulse: false };
        return { label: 'STABLE', color: 'text-green-600 bg-green-50 border-green-200', pulse: false };
    };

    const signal = getInvestmentSignal();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF] border border-[#C5A059]/20 shadow-[0_4px_20px_rgba(29,79,156,0.06)] p-8 font-sans"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <BarChart3 size={18} className="text-[#1D4F9C]" />
                    <h3 className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold">
                        Price Intelligence
                    </h3>
                </div>
                <span className={`text-[9px] tracking-widest uppercase font-bold px-3 py-1.5 border ${signal.color} ${signal.pulse ? 'animate-pulse' : ''}`}>
                    {signal.label}
                </span>
            </div>

            {/* Main Metric */}
            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        {isPositive
                            ? <TrendingUp size={20} className="text-green-500" />
                            : <TrendingDown size={20} className="text-red-500" />
                        }
                        <span className={`text-3xl font-serif ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                            {priceTrend.yoyGrowth}
                        </span>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#323334]/60">
                        Year-on-Year Growth
                    </div>
                </div>

                <div>
                    <div className="text-2xl font-serif text-[#323334] mb-2">
                        {priceTrend.currentAvgPrice}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#323334]/60">
                        Current Avg. Price
                    </div>
                </div>
            </div>

            {/* Infrastructure Score Bar */}
            {infrastructureScores && (
                <div className="pt-6 border-t border-[#EEF2F6]">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase tracking-widest text-[#323334]/60 flex items-center gap-2">
                            <Activity size={12} className="text-[#1D4F9C]" /> Infrastructure Catalyst Index
                        </span>
                        <span className="text-sm font-medium text-[#1D4F9C]">{infraTotal}/10</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { label: 'Metro', value: infrastructureScores.metro },
                            { label: 'Ring Road', value: infrastructureScores.ringRoad },
                            { label: 'IT Hub', value: infrastructureScores.itHub }
                        ].map(item => (
                            <div key={item.label}>
                                <div className="flex justify-between text-[9px] uppercase tracking-widest text-[#323334]/50 mb-2">
                                    <span>{item.label}</span>
                                    <span className="text-[#1D4F9C] font-medium">{item.value}</span>
                                </div>
                                <div className="h-1.5 bg-[#EEF2F6] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value * 10}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="h-full bg-[#1D4F9C] rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-6 pt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                <p className="text-[10px] text-[#323334]/50 italic">
                    {projectName} — {location} micro-market analysis
                </p>
                <div className="flex items-center gap-1 text-[#1D4F9C]">
                    <Zap size={12} />
                    <span className="text-[9px] uppercase tracking-widest font-bold">Live</span>
                </div>
            </div>
        </motion.div>
    );
}
