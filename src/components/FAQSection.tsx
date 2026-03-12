'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQSection({ items, title = "Frequently Asked Questions" }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // JSON-LD for FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="mt-16 pt-12 border-t border-[#C5A059]/10">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="text-[#1D4F9C]" size={24} />
                <h2 className="text-3xl font-serif text-[#323334] font-light">{title}</h2>
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div 
                        key={index}
                        className="border border-[#C5A059]/20 rounded-sm bg-white overflow-hidden transition-all duration-300"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#EEF2F6]/50 transition-colors"
                        >
                            <span className="text-[#323334] font-medium text-lg leading-tight pr-8">
                                {item.question}
                            </span>
                            {openIndex === index ? (
                                <ChevronUp className="text-[#1D4F9C] flex-shrink-0" size={20} />
                            ) : (
                                <ChevronDown className="text-[#1D4F9C] flex-shrink-0" size={20} />
                            )}
                        </button>
                        
                        <div 
                            className={`px-6 transition-all duration-300 ease-in-out ${
                                openIndex === index ? 'max-h-[500px] py-6' : 'max-h-0 py-0'
                            } overflow-hidden`}
                        >
                            <p className="text-[#323334]/80 font-light leading-relaxed">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
