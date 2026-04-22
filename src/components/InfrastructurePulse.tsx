'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Train, Route, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

const INFRA_PROJECTS = [
    {
        name: "Pune Metro Line 3",
        status: "84% Complete",
        impact: "Hinjewadi to Shivajinagar",
        benefit: "Reduces commute by 45 mins",
        type: "Metro"
    },
    {
        name: "Pune Ring Road (Phase 1)",
        status: "Land Acquisition 92%",
        impact: "Dehu Rd to Katraj",
        benefit: "Bypasses city traffic",
        type: "Road"
    },
    {
        name: "Hinjewadi-Mhalunge Hi-Tech City",
        status: "Institutional Phase Active",
        impact: "West Pune Corridor",
        benefit: "50,000+ New Tech Jobs",
        type: "Tech"
    }
];

export default function InfrastructurePulse() {
    return (
        <div className="bg-[#EEF2F6] border border-[#1D4F9C]/10 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <span className="text-[10px] font-bold text-[#1D4F9C] uppercase tracking-widest block mb-2">Live Market Intelligence</span>
                    <h3 className="text-2xl font-serif text-[#323334]">Pune Infrastructure Pulse</h3>
                </div>
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-tighter animate-pulse">
                    <ShieldCheck size={14} /> Live Verification
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {INFRA_PROJECTS.map((infra, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl border border-[#C5A059]/10 shadow-sm group hover:border-[#1D4F9C]/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#1D4F9C]/5 flex items-center justify-center text-[#1D4F9C] group-hover:bg-[#1D4F9C] group-hover:text-white transition-colors">
                                {infra.type === 'Metro' ? <Train size={20} /> : infra.type === 'Road' ? <Route size={20} /> : <Building2 size={20} />}
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-[#323334]">{infra.name}</h4>
                                <span className="text-[10px] text-[#1D4F9C] font-mono">{infra.status}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <span className="text-[9px] uppercase tracking-widest text-[#323334]/40 mb-1">Impact Zone</span>
                                <span className="text-xs text-[#323334] font-medium">{infra.impact}</span>
                            </div>
                            <div className="flex items-center gap-2 pt-4 border-t border-[#EEF2F6]">
                                <TrendingUp size={14} className="text-[#C5A059]" />
                                <span className="text-[10px] text-[#323334]/60 italic font-light">{infra.benefit}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-[#1D4F9C]/5 border-l-4 border-[#1D4F9C] rounded-r-xl">
                <p className="text-[10px] text-[#323334]/70 leading-relaxed italic">
                    <strong>Investment Alpha:</strong> These infrastructure milestones are projected to drive a **15-18% capital appreciation surge** in Hinjewadi and Hadapsar by Q4 2026. All Joyville projects are strategically positioned within 500m - 2km of these transit nodes.
                </p>
            </div>
        </div>
    );
}
