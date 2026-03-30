"use client";

import { Shield, Landmark, Building2, FileCheck } from 'lucide-react';

export default function InstitutionalEndorsement() {
    const endorsements = [
        {
            icon: <Building2 className="w-8 h-8 text-[#1D4F9C]" />,
            name: "MahaRERA Registered",
            description: "100% compliance with RERA transparency guidelines and delivery timelines."
        },
        {
            icon: <Landmark className="w-8 h-8 text-[#1D4F9C]" />,
            name: "Banking Grade Asset",
            description: "Approved by SBI, HDFC, and ICICI for maximum mortgage eligibility and trust."
        },
        {
            icon: <Shield className="w-8 h-8 text-[#1D4F9C]" />,
            name: "Shapoorji Legacy",
            description: "150+ years of engineering excellence and industrial-grade construction quality."
        },
        {
            icon: <FileCheck className="w-8 h-8 text-[#1D4F9C]" />,
            name: "Institutional backing",
            description: "Backed by global financial institutions, ensuring project liquidity and completion."
        }
    ];

    return (
        <section className="py-20 bg-[#EEF2F6] border-y border-[#C5A059]/20 font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#1D4F9C] font-semibold text-[10px] tracking-[0.3em] uppercase block mb-4">
                        Institutional Trust & Regulatory Compliance
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-[#323334] font-light mb-6">
                        Hardened by Institutional Standards.
                    </h2>
                    <p className="text-[#323334]/70 font-light max-w-2xl mx-auto leading-relaxed">
                        Joyville by Shapoorji Pallonji is not just a residential project; it&apos;s an institutional-grade asset audited for long-term reliability and financial integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {endorsements.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group cursor-default">
                            <div className="w-16 h-16 bg-[#FFFFFF] shadow-sm rounded-full flex items-center justify-center mb-6 group-hover:shadow-md group-hover:scale-105 transition-all duration-300 border border-[#C5A059]/10">
                                {item.icon}
                            </div>
                            <h3 className="text-[#323334] font-medium text-lg mb-3 tracking-tight">{item.name}</h3>
                            <p className="text-[#323334]/60 text-sm font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Institutional Partner Ribbon */}
                <div className="mt-20 pt-10 border-t border-[#C5A059]/10 flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
                    <div className="text-xs font-bold uppercase tracking-widest text-[#323334]/40 mr-4">Approved by Leading Institutions</div>
                    {/* These would ideally be logos - using high-trust placeholders/text for now as per instructions */}
                    <div className="text-lg font-serif">HDFC BANK</div>
                    <div className="text-lg font-serif italic">SBI</div>
                    <div className="text-lg font-serif tracking-tighter">ICICI Bank</div>
                    <div className="text-lg font-bold tracking-widest">CREDAI</div>
                    <div className="text-lg font-serif">Axis Bank</div>
                </div>
            </div>
        </section>
    );
}
