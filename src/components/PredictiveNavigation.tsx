'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Building2, MapPin } from 'lucide-react';

interface PredictiveNavigationProps {
    context: 'project' | 'locality' | 'blog' | 'glossary';
    currentSlug?: string;
    localityName?: string;
}

export default function PredictiveNavigation({ context, currentSlug, localityName }: PredictiveNavigationProps) {
    let suggestion = {
        title: "Next Logical Step",
        description: "Continue your journey with our curated recommendations.",
        link: "/projects",
        linkLabel: "View Portfolios",
        icon: <Building2 className="text-[#C5A059]" size={24} />
    };

    if (context === 'project') {
        suggestion = {
            title: "Compare with Competitors",
            description: "See how Joyville stacks up against Godrej, VTP, and Kolte Patil in this micro-market.",
            link: "/insights/joyville-vs-competitors",
            linkLabel: "View Comparison Matrix",
            icon: <BookOpen className="text-[#C5A059]" size={24} />
        };
    } else if (context === 'blog') {
        suggestion = {
            title: `Explore ${localityName || 'Pune'} Projects`,
            description: "Apply your research by exploring our premium gated communities in this high-growth corridor.",
            link: "/projects",
            linkLabel: "Browse Projects",
            icon: <Building2 className="text-[#C5A059]" size={24} />
        };
    } else if (context === 'locality') {
        suggestion = {
            title: "Investment Forecast",
            description: "View the 5-year capital appreciation projection and ROI analysis for this suburb.",
            link: "/insights/pune-real-estate-market-forecast-2026-investment-hotspots",
            linkLabel: "View Market Forecast",
            icon: <MapPin className="text-[#C5A059]" size={24} />
        };
    }

    return (
        <div className="mt-16 p-8 border border-[#C5A059]/20 bg-[#F9FBFF] rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#C5A059]/50 transition-all duration-500 shadow-sm hover:shadow-md">
            <div className="flex items-start gap-6">
                <div className="mt-1 p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {suggestion.icon}
                </div>
                <div>
                    <h4 className="text-sm font-serif text-[#1D4F9C] uppercase tracking-widest mb-2">{suggestion.title}</h4>
                    <p className="text-[#323334] font-light text-base leading-relaxed max-w-lg">
                        {suggestion.description}
                    </p>
                </div>
            </div>

            <Link
                href={suggestion.link}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white text-[10px] tracking-[0.2em] uppercase font-semibold hover:bg-[#C5A059] transition-all duration-500 rounded-sm whitespace-nowrap"
            >
                {suggestion.linkLabel}
                <ArrowRight size={14} />
            </Link>
        </div>
    );
}
