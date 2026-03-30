import { Metadata } from 'next';
export const dynamic = 'force-static';
import HomeClient from '@/components/HomeClient';
import SGEAnswerHub from '@/components/SGEAnswerHub';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
    title: "Pune Real Estate Market 2026 | Joyville Homes by Shapoorji Pallonji",
    description: "Dominating the Pune Real Estate Market: Official Joyville Pune by Shapoorji Pallonji Real Estate. Explore 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65 Lakhs. RERA approved.",
    keywords: [
        "Pune real estate market", "Pune real estate 2026", "buy property in Pune", "top real estate developer Pune", "Pune real estate investment",
        "Joyville Homes Pune", "Shapoorji Pallonji Pune", "Shapoorji Pallonji Real Estate Pune", 
        "Joyville Sensorium", "Joyville Vyomora", "Joyville Hadapsar Annexe", "Joyville Celestia", "Joyville Skyluxe Edition", "Wildernest SP Kingstown", "Vanaha Bavdhan", "Vanaha Golfland", "Vanaha Springs",
        "2 BHK flats in Hinjewadi", "3 BHK flats in Hinjewadi", "2 BHK flats in Hadapsar", "3 BHK flats in Hadapsar", "apartments in Bavdhan Pune", "Shapoorji Pallonji projects in Pune", "Joyville Pune price list", "Joyville Pune floor plans", "Shapoorji Pallonji Pune contact", "flats near SP Infocity", "flats near Magarpatta City", "township projects in Pune", "ready to move flats Pune", "new launch projects Pune", "Hinjewadi IT park residential projects", "Shapoorji Pallonji Bavdhan township", "buy 2 BHK in Pune", "buy 3 BHK in Pune", "best residential projects in Pune", "Shapoorji Pallonji Pune sales gallery",
        "RERA approved projects Pune", "official price list Joyville Pune", "book site visit Shapoorji Pallonji", "lowest price 2 BHK Hinjewadi", "Joyville Pune possession date 2026"
    ],
    alternates: {
        canonical: 'https://joyville-homes.com',
    }
};

export default function Home() {
    return (
        <>
            <HomeClient />
            
            {/* Phase 33: Homepage Matchmaker Funnel */}
            <section className="bg-[#FFFFFF] py-24 border-y border-[#C5A059]/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#1D4F9C] rounded-sm p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent skew-x-12" />
                        <div className="max-w-2xl text-center lg:text-left relative z-10">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059] mb-6 block">The Decision Engine</span>
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Which Joyville Project Is <span className="italic opacity-80">Right For You?</span></h2>
                            <p className="text-lg font-light opacity-70 leading-relaxed mb-10">
                                Skip the search and get a data-backed recommendation in 60 seconds. Our matchmaker analyzes your budget, location priority, and ROI goals to find your ideal SP asset.
                            </p>
                            <Link href="/insights/matchmaker" className="inline-flex items-center gap-4 bg-white text-[#1D4F9C] px-12 py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
                                Start Matchmaker <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                        <div className="hidden lg:flex items-center justify-center relative z-10 p-12 border border-white/10 rounded-full group-hover:scale-105 transition-transform duration-700">
                             <div className="w-32 h-32 bg-[#C5A059] rounded-full flex items-center justify-center shadow-2xl">
                                <Sparkles className="w-12 h-12 text-[#1D4F9C]" />
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            <SGEAnswerHub />
        </>
    );
}
