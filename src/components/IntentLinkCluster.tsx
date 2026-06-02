"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Briefcase, Globe2, Compass } from 'lucide-react';

interface IntentLink {
    label: string;
    href: string;
}

interface IntentLinkClusterProps {
    upgraders?: IntentLink[];
    investors?: IntentLink[];
    nris?: IntentLink[];
}

import { SEO_ROUTES } from '@/data/seo-routes';

export default function IntentLinkCluster({
    upgraders = [
        { label: "Pune Real Estate Premium Projects", href: "/properties/pune-real-estate-premium-projects" },
        { label: "West Pune Real Estate Luxury Homes", href: "/properties/west-pune-real-estate-luxury-homes" },
        { label: "3 BHK Luxury Apartments Pune West", href: "/properties/3-bhk-luxury-apartments-pune-west" }
    ],
    investors = [
        { label: "Hinjewadi Real Estate Investment", href: "/properties/hinjewadi-real-estate-investment" },
        { label: "Hadapsar Real Estate Townships", href: "/properties/hadapsar-real-estate-townships" },
        { label: "Magarpatta Real Estate Nearby Flats", href: "/properties/magarpatta-real-estate-nearby-flats" }
    ],
    nris = [
        { label: "Shapoorji Pallonji Joyville Homes Hinjewadi", href: "/properties/shapoorji-pallonji-joyville-homes-hinjewadi-pune" },
        { label: "Townships Near Magarpatta City", href: "/properties/townships-near-magarpatta-city" },
        { label: "2 BHK Flats in Hinjewadi", href: "/properties/2-bhk-flats-in-hinjewadi" }
    ]
}: IntentLinkClusterProps) {
    return (
        <section className="py-16 bg-[#EEF2F6] border-t border-[#C5A059]/20" aria-label="Explore properties by investment intent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1D4F9C] block mb-3">Semantic Discovery Mesh</span>
                    <h2 className="text-3xl font-serif text-[#323334]">Explore by Investment Intent</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* The Upgrader Track */}
                    <div className="bg-[#FFFFFF] p-8 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EEF2F6]">
                            <Compass size={20} className="text-[#1D4F9C]" />
                            <h3 className="text-lg font-serif text-[#323334]">The Upgrader Track</h3>
                        </div>
                        <ul className="space-y-4">
                            {upgraders.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="flex items-start gap-2 text-xs font-light text-[#323334]/80 hover:text-[#1D4F9C] transition-colors leading-snug group/link">
                                        <ArrowUpRight size={14} className="text-[#C5A059] flex-shrink-0 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The Investor Track */}
                    <div className="bg-[#FFFFFF] p-8 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EEF2F6]">
                            <Briefcase size={20} className="text-[#1D4F9C]" />
                            <h3 className="text-lg font-serif text-[#323334]">The Investor Track</h3>
                        </div>
                        <ul className="space-y-4">
                            {investors.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="flex items-start gap-2 text-xs font-light text-[#323334]/80 hover:text-[#1D4F9C] transition-colors leading-snug group/link">
                                        <ArrowUpRight size={14} className="text-[#C5A059] flex-shrink-0 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* The NRI Track */}
                    <div className="bg-[#FFFFFF] p-8 border border-[#C5A059]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-transform duration-500">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EEF2F6]">
                            <Globe2 size={20} className="text-[#1D4F9C]" />
                            <h3 className="text-lg font-serif text-[#323334]">The NRI Gateway</h3>
                        </div>
                        <ul className="space-y-4">
                            {nris.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.href} className="flex items-start gap-2 text-xs font-light text-[#323334]/80 hover:text-[#1D4F9C] transition-colors leading-snug group/link">
                                        <ArrowUpRight size={14} className="text-[#C5A059] flex-shrink-0 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
