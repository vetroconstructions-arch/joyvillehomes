"use client";

import { useCallback } from 'react';

const SECTIONS = ['Overview', 'Amenities', 'Specifications', 'Floor-Plans', 'Financing', 'Gallery', 'Location'];

export default function StickyProjectTabs() {
    const scrollToSection = useCallback((e: React.MouseEvent<HTMLButtonElement>, section: string) => {
        e.preventDefault();
        const element = document.getElementById(section.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    return (
        <div className="sticky top-20 z-40 bg-[#EEF2F6]/90 backdrop-blur-md border-y border-[#1D4F9C]/60 mb-16 hidden md:block shadow-xl">
            <div className="max-w-7xl mx-auto px-6 flex items-center gap-8 overflow-x-auto no-scrollbar">
                {SECTIONS.map((section) => (
                    <button
                        key={section}
                        onClick={(e) => scrollToSection(e, section)}
                        className="py-5 text-[#1A1A1A] hover:text-[#1D4F9C] tracking-[0.15em] uppercase text-[10px] font-medium whitespace-nowrap transition-colors border-b-2 border-transparent hover:border-[#1D4F9C]"
                    >
                        {section.replace('-', ' ')}
                    </button>
                ))}
            </div>
        </div>
    );
}
