"use client";

import { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import QuickEnquireModal from './QuickEnquireModal';
import Link from 'next/link';
import { generateUnitSlug } from '@/utils/seo-utils';
import { ArrowRight } from 'lucide-react';

interface FloorPlan {
    type: string;
    description?: string;
    carpetArea: string;
    image?: string;
    intelligence?: {
        roi: string;
        rentalYield: string;
        appreciation: string;
    };
}

interface ProjectClientWrapperProps {
    floorPlans: FloorPlan[];
    projectName: string;
    location: string;
}

export default function ProjectClientWrapper({ floorPlans, projectName, location }: ProjectClientWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {floorPlans.map((plan, idx) => (
                    <div
                        key={idx}
                        className="w-full bg-[#EEF2F6] border border-[#C5A059]/60 p-6 flex flex-col hover:border-[#1D4F9C] transition-colors group"
                    >
                        <Home className="text-[#1D4F9C] mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} strokeWidth={1} />
                        <h4 className="text-[#323334] font-serif text-lg mb-2">{plan.type}</h4>
                        <p className="text-[#1D4F9C] font-light text-sm mb-4">Carpet: {plan.carpetArea}</p>
                        
                        {plan.intelligence && (
                            <div className="mt-2 mb-6 grid grid-cols-3 gap-2 border-t border-[#C5A059]/20 pt-4">
                                <div className="text-center">
                                    <span className="text-[8px] uppercase tracking-tighter text-[#323334]/40 block">Est. ROI</span>
                                    <span className="text-[11px] font-bold text-[#1D4F9C]">{plan.intelligence.roi}</span>
                                </div>
                                <div className="text-center border-x border-[#C5A059]/20">
                                    <span className="text-[8px] uppercase tracking-tighter text-[#323334]/40 block">Yield</span>
                                    <span className="text-[11px] font-bold text-[#1D4F9C]">{plan.intelligence.rentalYield}</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-[8px] uppercase tracking-tighter text-[#323334]/40 block">Appr.</span>
                                    <span className="text-[11px] font-bold text-[#1D4F9C]">{plan.intelligence.appreciation}</span>
                                </div>
                            </div>
                        )}

                        <Link 
                            href={`/properties/unit/${generateUnitSlug(projectName, plan.type, location)}`}
                            className="mt-4 mb-3 w-full py-3 bg-[#EEF2F6] border border-[#C5A059]/30 text-[9px] uppercase tracking-widest text-[#1D4F9C] font-bold hover:bg-[#1D4F9C] hover:text-white transition-all flex items-center justify-center gap-2 group/link"
                        >
                            View Floor Plan Details <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>

                        <button
                            aria-label={`Unlock Detailed Cost Sheet for ${plan.type}`}
                            onClick={() => setIsModalOpen(true)}
                            className="w-full py-3 bg-[#FFFFFF] border border-[#1D4F9C]/20 text-[10px] uppercase tracking-widest text-[#1A1A1A] hover:bg-[#1D4F9C] hover:text-white transition-all flex items-center justify-center gap-1"
                        >
                            Unlock Detailed Cost Sheet <ChevronRight size={12} />
                        </button>
                    </div>
                ))}
            </div>

            <QuickEnquireModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projectName={projectName}
                source="Floor Plan Cost Sheet Unlock"
            />
        </>
    );
}
