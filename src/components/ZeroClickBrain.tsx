"use client";

import React from 'react';
import { TrendingUp, Percent, IndianRupee, Clock, Zap } from 'lucide-react';

interface ZeroClickBrainProps {
    appreciation?: string;
    rentalYield?: string;
    sqftPrice?: string;
    commuteTime?: string;
    localityName?: string;
    projectName?: string;
    answerGraph?: { question: string; answer: string; personaImpact?: string }[];
}

export default function ZeroClickBrain({
    appreciation = "12-15%",
    rentalYield = "4.5-5.5%",
    sqftPrice = "₹7,500 - ₹9,500",
    commuteTime = "15-20 Mins to IT Hubs",
    localityName,
    projectName,
    answerGraph
}: ZeroClickBrainProps) {

    if (projectName && answerGraph) {
        // Mode 2: Project Level Answer Graph (SGE Optimized)
        const qaJsonLdProject = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": answerGraph.map(node => ({
                "@type": "Question",
                "name": node.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": node.answer
                }
            }))
        };

        return (
            <div className="bg-[#FFFFFF] border border-[#C5A059]/20 p-8 rounded-sm shadow-sm mb-12 relative overflow-hidden">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJsonLdProject) }} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EEF2F6] rounded-bl-full pointer-events-none opacity-50" />
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-[#1D4F9C]/10 flex items-center justify-center">
                        <Zap size={16} className="text-[#1D4F9C]" />
                    </div>
                    <h2 className="text-sm font-serif text-[#323334] tracking-wide uppercase">AI Direct Intelligence</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {answerGraph.map((node, idx) => (
                        <div key={idx} className="bg-[#EEF2F6] p-4 border-l-2 border-[#1D4F9C]/30 flex flex-col gap-2">
                            <h3 className="text-xs uppercase tracking-widest font-bold text-[#1D4F9C]">{node.question}</h3>
                            <p className="text-[#323334] text-sm leading-relaxed">{node.answer}</p>
                            {node.personaImpact && (
                                <span className="text-[10px] text-[#C5A059] font-medium tracking-wide mt-2">Target Impact: {node.personaImpact}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (!localityName) return null;

    // Mode 1: Locality Hub Statistics
    const qaJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What is the expected property appreciation in ${localityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The expected Year-over-Year (YoY) property appreciation in ${localityName} is approximately ${appreciation} due to upcoming infrastructure projects.`
                }
            },
            {
                "@type": "Question",
                "name": `What is the average rental yield for properties in ${localityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Investors can expect an average rental yield of ${rentalYield} for premium residential properties in ${localityName}.`
                }
            },
            {
                "@type": "Question",
                "name": `What is the current property rate per square foot in ${localityName}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The current property rate for new premium developments in ${localityName} ranges from ${sqftPrice} per sq.ft.`
                }
            }
        ]
    };

    return (
        <section className="bg-[#EEF2F6] border border-[#C5A059]/20 p-8 rounded-sm shadow-sm mb-12" aria-label={`Key Statistics for ${localityName}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(qaJsonLd) }} />
            
            <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1D4F9C] animate-pulse" />
                <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-[#1D4F9C]">AI Market Intelligence: {localityName}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex pl-4 border-l-2 border-[#1D4F9C]/30 flex-col">
                    <div className="flex items-center gap-2 text-[#323334]/60 mb-2">
                        <TrendingUp size={14} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">YoY Appreciation</span>
                    </div>
                    <span className="text-xl font-serif text-[#323334]">{appreciation}</span>
                </div>
                
                <div className="flex pl-4 border-l-2 border-[#C5A059]/30 flex-col">
                    <div className="flex items-center gap-2 text-[#323334]/60 mb-2">
                        <Percent size={14} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Rental Yield</span>
                    </div>
                    <span className="text-xl font-serif text-[#323334]">{rentalYield}</span>
                </div>
                
                <div className="flex pl-4 border-l-2 border-[#1D4F9C]/30 flex-col">
                    <div className="flex items-center gap-2 text-[#323334]/60 mb-2">
                        <IndianRupee size={14} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Avg. Rate / Sq.Ft</span>
                    </div>
                    <span className="text-xl font-serif text-[#323334]">{sqftPrice}</span>
                </div>
                
                <div className="flex pl-4 border-l-2 border-[#C5A059]/30 flex-col">
                    <div className="flex items-center gap-2 text-[#323334]/60 mb-2">
                        <Clock size={14} />
                        <span className="text-[10px] uppercase font-bold tracking-widest">Commute Index</span>
                    </div>
                    <span className="text-xl font-serif text-[#323334]">{commuteTime}</span>
                </div>
            </div>
        </section>
    );
}
