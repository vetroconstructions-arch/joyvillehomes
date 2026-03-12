"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Database, Globe, ArrowUpRight } from 'lucide-react';

interface MarketPulseTickerProps {
    localityName: string;
    avgPpsf: number;
    yoyGrowth: string;
}

const MarketPulseTicker: React.FC<MarketPulseTickerProps> = ({ localityName, avgPpsf, yoyGrowth }) => {
    // Schema for Dataset Authority
    const datasetSchema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": `${localityName} Real Estate Market Price Index`,
        "description": `Real-time price trends and investment data for ${localityName}, Pune.`,
        "url": `https://www.joyville-homes.com/locality/${localityName.toLowerCase()}`,
        "creator": {
            "@type": "Organization",
            "name": "Shapoorji Pallonji Real Estate Research Desk"
        },
        "variableMeasured": [
            {
                "@type": "PropertyValue",
                "name": "Average Price per Sq.Ft.",
                "value": avgPpsf,
                "unitText": "INR/sqft"
            },
            {
                "@type": "PropertyValue",
                "name": "YoY Capital Appreciation",
                "value": yoyGrowth
            }
        ],
        "dateModified": new Date().toISOString()
    };

    return (
        <section className="my-16 bg-[#1D4F9C] py-8 overflow-hidden relative shadow-2xl">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }} />
            
            {/* Ambient Background Signals */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                            <BarChart3 className="text-[#C5A059]" size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 block mb-1">Market Pulse Index</span>
                            <h3 className="text-xl font-serif text-white tracking-tight">{localityName} Data Authority</h3>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-wrap justify-center lg:justify-end gap-12">
                        <div className="text-center lg:text-left">
                            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">Average Price</span>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-serif text-white">₹{avgPpsf.toLocaleString()}</span>
                                <span className="text-[10px] text-white/40 font-light lowercase">per sq.ft</span>
                            </div>
                        </div>

                        <div className="text-center lg:text-left">
                            <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold block mb-2">YoY Growth</span>
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-serif text-white flex items-center gap-1">
                                    {yoyGrowth} <ArrowUpRight size={20} className="text-green-400" />
                                </span>
                            </div>
                        </div>

                        <div className="hidden xl:flex flex-col justify-center border-l border-white/10 pl-12">
                            <div className="flex items-center gap-2 text-[10px] text-white/60 mb-1">
                                <Database size={10} />
                                <span className="uppercase tracking-widest uppercase font-bold">SP Research Nodes: Active</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-white/60">
                                <Globe size={10} />
                                <span className="uppercase tracking-widest uppercase font-bold">Source: Proprietary Dataset 15.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scrolling Decorative Ticker (Background) */}
            <div className="mt-8 flex whitespace-nowrap opacity-5 select-none pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="text-3xl font-serif text-white mx-8 uppercase tracking-[0.5em]">
                        {localityName} Real-Time Market Feed — PUNE DATA AUTHORITY — 
                    </span>
                ))}
            </div>
        </section>
    );
};

export default MarketPulseTicker;
