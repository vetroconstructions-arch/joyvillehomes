"use client";

import { sendGAEvent } from '@next/third-parties/google';

interface BrochureButtonProps {
    projectName: string;
    label?: string;
    className?: string;
}

export default function BrochureButton({
    projectName,
    label = "Request Brochure",
    className = "w-full bg-[#1D4F9C] text-[#FFFFFF] uppercase tracking-[0.2em] text-[10px] font-bold py-4 hover:bg-[#323334] transition-colors duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.2)]"
}: BrochureButtonProps) {

    const handleDownload = () => {
        sendGAEvent('event', 'brochure_download', { project: projectName });

        // Meta Pixel Tracking for micro-conversion
        if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('track', 'Contact', { content_name: `${projectName} Brochure` });
        }

        // Add actual download logic here if needed
        alert(`Thank you! The brochure for ${projectName} will be sent to your email shortly.`);
    };

    return (
        <button
            onClick={handleDownload}
            className={className}
            aria-label={`Download brochure for ${projectName}`}
        >
            {label}
        </button>
    );
}
