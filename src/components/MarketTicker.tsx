'use client';

import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface MarketStat {
    locality: string;
    avgPrice: number;
    change: number;
    trend: 'up' | 'down';
}

const marketStats: MarketStat[] = [
    { locality: 'Hinjewadi Ph 1', avgPrice: 8450, change: 1.2, trend: 'up' },
    { locality: 'Hadapsar Annexe', avgPrice: 7200, change: 0.8, trend: 'up' },
    { locality: 'Bavdhan Peak', avgPrice: 9100, change: -0.4, trend: 'down' },
    { locality: 'Manjari Corridor', avgPrice: 6850, change: 2.1, trend: 'up' },
    { locality: 'Kharadi Extension', avgPrice: 10200, change: 0.5, trend: 'up' },
];

export default function MarketTicker() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const datasetSchema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": "Pune Residential Market Price Trends - SP Insights",
        "description": "Real-time price trends and appreciation metrics for major Pune micro-markets including Hinjewadi, Hadapsar, and Bavdhan.",
        "url": "https://joyville-homes.com/pune-real-estate-market",
        "creator": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate Research Desk",
            "url": "https://joyville-homes.com"
        },
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "variableMeasured": ["Average Price per Sq. Ft.", "Year-over-Year Growth"],
        "temporalCoverage": "2024/2026"
    };

    return (
        <div className={`w-full bg-[#1D4F9C] text-white overflow-hidden py-1.5 transition-all duration-500 ${scrolled ? 'fixed top-0 z-[60] shadow-lg' : ''}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
            <div className="flex whitespace-nowrap animate-marquee items-center gap-12 px-4">
                <div className="flex items-center gap-2 border-r border-white/20 pr-12">
                    <Activity size={14} className="text-[#C5A059]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A059]">Pune Market Pulse: March 2026</span>
                </div>
                
                {/* Duplicate stats for seamless loop */}
                {[...marketStats, ...marketStats].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                        <span className="text-[10px] uppercase tracking-tighter font-medium text-white/70 group-hover:text-white transition-colors">
                            {stat.locality}
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-xs font-mono font-bold">₹{stat.avgPrice.toLocaleString()}</span>
                            <div className={`flex items-center text-[9px] font-bold ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.trend === 'up' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                {stat.change}%
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
