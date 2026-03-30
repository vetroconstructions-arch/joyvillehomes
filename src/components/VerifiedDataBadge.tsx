"use client";

import React from 'react';
import { ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VerifiedDataBadgeProps {
    source: string;
    sourceUrl?: string;
    label?: string;
    className?: string;
}

/**
 * Phase 29: Verified Data Badge
 * A critical trust-marker for E-E-A-T (Expertise, Authoritativeness, Trustworthiness).
 * Links raw metrics (Price, ROI, Infrastructure) to official sources.
 */
export default function VerifiedDataBadge({ source, sourceUrl, label = "RERA Data Source Verified", className = "" }: VerifiedDataBadgeProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div 
            className={`inline-flex items-center gap-1.5 group cursor-help relative ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center gap-1 bg-[#1D4F9C]/5 hover:bg-[#1D4F9C]/10 border border-[#1D4F9C]/10 px-2 py-0.5 rounded-full transition-all duration-300">
                <ShieldCheck size={10} className="text-[#1D4F9C]" />
                <span className="text-[8px] uppercase tracking-widest font-bold text-[#1D4F9C]/60 transition-colors group-hover:text-[#1D4F9C]">Verified</span>
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute bottom-full left-0 mb-2 w-48 p-3 bg-[#FFFFFF] border border-[#1D4F9C]/10 shadow-2xl rounded-sm z-[100] backdrop-blur-xl"
                    >
                        <div className="flex items-start gap-2 mb-2">
                            <Info size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                            <p className="text-[10px] text-[#323334] font-medium leading-tight">{label}</p>
                        </div>
                        <div className="text-[9px] text-[#323334]/60 font-light leading-relaxed mb-3">
                            This metric is cross-referenced with {source} for absolute accuracy.
                        </div>
                        {sourceUrl && (
                            <a 
                                href={sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-[8px] text-[#1D4F9C] uppercase tracking-widest font-bold hover:underline"
                            >
                                Inspect Full Audit <ExternalLink size={8} />
                            </a>
                        )}
                        <div className="absolute top-full left-4 w-2 h-2 bg-[#FFFFFF] border-b border-r border-[#1D4F9C]/10 rotate-45 -mt-1" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
