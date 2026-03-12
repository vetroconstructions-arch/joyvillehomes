"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronDown } from 'lucide-react';

interface FAQ {
    q: string;
    a: string;
}

interface HyperLocalQAProps {
    localityName: string;
    faqs: FAQ[];
}

const HyperLocalQA: React.FC<HyperLocalQAProps> = ({ localityName, faqs }) => {
    if (!faqs || faqs.length === 0) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <section className="py-24 bg-[#F9FAFB] border-y border-[#E5E7EB]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em]">
                        <MessageSquare size={14} /> Hyper-Local Intelligence
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#323334] font-light">
                        {localityName} <span className="italic">Answer Engine</span>
                    </h2>
                    <p className="text-sm text-[#323334]/60 font-light max-w-xl mx-auto">
                        Critical market queries formulated for SGE extraction and homebuyer clarity.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.details 
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                <h3 className="text-sm md:text-base font-serif text-[#323334] group-open:text-[#1D4F9C] transition-colors pr-8">
                                    {faq.q}
                                </h3>
                                <div className="w-8 h-8 rounded-full bg-[#1D4F9C]/5 flex items-center justify-center text-[#1D4F9C] group-open:rotate-180 transition-transform duration-300">
                                    <ChevronDown size={16} />
                                </div>
                            </summary>
                            <div className="px-6 pb-6 text-sm text-[#323334]/70 font-light leading-relaxed border-t border-[#E5E7EB]/50 pt-4">
                                {faq.a}
                            </div>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HyperLocalQA;
