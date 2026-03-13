"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Heart, TrendingUp } from 'lucide-react';

interface EntityPopularityPulseProps {
    views: number;
    interested: number;
    projectName: string;
    personaTags?: string[];
}

const EntityPopularityPulse: React.FC<EntityPopularityPulseProps> = ({ views, interested, projectName, personaTags }) => {
    // Schema for Interaction Signals
    const interactionSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": projectName,
        "interactionStatistic": [
            {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/ViewAction",
                "userInteractionCount": views
            },
            {
                "@type": "InteractionCounter",
                "interactionType": "https://schema.org/SubscribeAction",
                "userInteractionCount": interested
            }
        ]
    };

    return (
        <div className="flex flex-wrap items-center gap-4 mt-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(interactionSchema) }} />
            
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#EEF2F6] rounded-full border border-[#1D4F9C]/10">
                <div className="relative">
                    <Eye size={14} className="text-[#1D4F9C]" />
                    <motion.span 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -top-1 -right-1 w-2 h-2 bg-[#1D4F9C] rounded-full"
                    />
                </div>
                <span className="text-[10px] font-bold text-[#323334]">
                    {views.toLocaleString()} Active Views
                </span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#FDF2F2] rounded-full border border-red-100">
                <Heart size={14} className="text-red-500 fill-red-500" />
                <span className="text-[10px] font-bold text-[#323334]">
                    {interested.toLocaleString()} Interested
                </span>
            </div>

            {personaTags && personaTags.length > 0 && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-100">
                    <TrendingUp size={14} className="text-blue-600" />
                    <span className="text-[10px] font-bold text-blue-700 uppercase tracking-tighter">
                        Top Choice for {personaTags[0].replace(/([A-Z])/g, ' $1').trim()}s
                    </span>
                </div>
            )}
        </div>
    );
};

export default EntityPopularityPulse;
