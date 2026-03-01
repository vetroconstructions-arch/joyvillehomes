"use client";

import { useState } from 'react';
import { ChevronRight, Home } from 'lucide-react';
import QuickEnquireModal from './QuickEnquireModal';

interface FloorPlan {
    type: string;
    carpetArea: string;
}

interface ProjectClientWrapperProps {
    floorPlans: FloorPlan[];
    projectName: string;
}

export default function ProjectClientWrapper({ floorPlans, projectName }: ProjectClientWrapperProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {floorPlans.map((plan, idx) => (
                    <button
                        key={idx}
                        aria-label={`Unlock Detailed Cost Sheet for ${plan.type}`}
                        onClick={() => setIsModalOpen(true)}
                        className="w-full block bg-[#EEF2F6] border border-[#C5A059]/60 p-6 text-center hover:bg-[#EEF2F6] transition-colors group cursor-pointer"
                    >
                        <Home className="text-[#1D4F9C] mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" size={24} strokeWidth={1} />
                        <h4 className="text-[#323334] font-serif text-lg mb-2">{plan.type}</h4>
                        <p className="text-[#1D4F9C] font-light text-sm mb-4">Carpet: {plan.carpetArea}</p>
                        <div className="text-[10px] uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#1D4F9C] transition-colors flex items-center justify-center gap-1 mx-auto">
                            Unlock Cost Sheet <ChevronRight size={12} />
                        </div>
                    </button>
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
