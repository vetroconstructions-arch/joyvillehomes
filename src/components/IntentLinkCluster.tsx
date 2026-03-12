"use client";

import React from 'react';
import Link from 'next/link';
import { Target, TrendingUp, Key, ShieldCheck } from 'lucide-react';

interface IntentLink {
    label: string;
    href: string;
}

const IntentLinkCluster: React.FC = () => {
    const clusters = [
        {
            title: "Investment Focused",
            icon: <TrendingUp className="text-[#C5A059]" size={18} />,
            links: [
                { label: "ROI Calculator", href: "/pune-real-estate-guide?intent=investment" },
                { label: "Hinjewadi Price Trends", href: "/locality/hinjewadi" },
                { label: "Hadapsar Growth Analysis", href: "/locality/hadapsar" },
                { label: "NRI Buying Guide", href: "/insights/complete-nri-guide-buying-property-pune-2026" }
            ]
        },
        {
            title: "Lifestyle & Possession",
            icon: <Key className="text-[#1D4F9C]" size={18} />,
            links: [
                { label: "Ready possession Flats", href: "/projects?status=ready" },
                { label: "Integrated Townships", href: "/insights/the-ultimate-guide-pune-east-townships-hadapsar" },
                { label: "Safety & Quality Hub", href: "/pune-real-estate-guide" },
                { label: "Compare Localities", href: "/locality/compare" }
            ]
        }
    ];

    return (
        <section className="py-12 bg-[#F4F6F9] border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-10">
                    <Target className="text-[#1D4F9C]" size={24} />
                    <h2 className="text-xl font-serif text-[#323334] tracking-tight">Smart Navigation Hub</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {clusters.map((cluster, idx) => (
                        <div key={idx} className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-3">
                                {cluster.icon}
                                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#323334]">{cluster.title}</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {cluster.links.map((link, lIdx) => (
                                    <Link 
                                        key={lIdx} 
                                        href={link.href}
                                        className="text-xs text-[#323334]/70 hover:text-[#1D4F9C] transition-colors flex items-center gap-2 font-light"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/40" />
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntentLinkCluster;
