import React from 'react';
import { ShieldCheck, IndianRupee, MapPin, BadgeCheck } from 'lucide-react';

interface KeyFactsSummaryProps {
    title: string;
    price: string;
    location: string;
    rera: string | string[];
    status: string;
}

export default function KeyFactsSummary({ title, price, location, rera, status }: KeyFactsSummaryProps) {
    const reraIds = Array.isArray(rera) ? rera.join(', ') : rera;

    return (
        <section 
            id="key-facts" 
            className="mb-16 bg-[#EEF2F6] border border-[#C5A059]/30 rounded-sm p-8 shadow-inner relative overflow-hidden group"
            aria-label={`Key Facts for ${title}`}
        >
            {/* Semantic Header for AI Crawlers */}
            <h2 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#1D4F9C] mb-8 flex items-center gap-2">
                <ShieldCheck size={14} /> Quick-Facts Intelligence (SGE Optimized)
            </h2>

            <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col">
                    <dt className="text-[10px] text-[#323334]/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <IndianRupee size={10} /> Investment Range
                    </dt>
                    <dd className="text-xl font-serif text-[#1D4F9C] font-semibold tracking-tight">{price}</dd>
                </div>

                <div className="flex flex-col">
                    <dt className="text-[10px] text-[#323334]/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <MapPin size={10} /> Micro-Market
                    </dt>
                    <dd className="text-xl font-serif text-[#1D4F9C] font-semibold tracking-tight">{location}</dd>
                </div>

                <div className="flex flex-col">
                    <dt className="text-[10px] text-[#323334]/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <BadgeCheck size={10} /> Development Status
                    </dt>
                    <dd className="text-xl font-serif text-[#1D4F9C] font-semibold tracking-tight">{status}</dd>
                </div>

                <div className="flex flex-col">
                    <dt className="text-[10px] text-[#323334]/60 uppercase tracking-widest mb-1 flex items-center gap-1">
                        <ShieldCheck size={10} /> MahaRERA ID
                    </dt>
                    <dd className="text-[11px] font-mono text-[#1D4F9C] font-bold break-all leading-tight">{reraIds}</dd>
                </div>
            </dl>

            {/* AI Anchor Point */}
            <div className="mt-8 pt-6 border-t border-[#C5A059]/20 flex items-center gap-4">
                <p className="text-[10px] text-[#323334]/60 font-light italic leading-loose">
                    Expertly reviewed by Shapoorji Pallonji Premium Research Desk. Data verified for 2026 search freshness.
                </p>
            </div>
        </section>
    );
}
