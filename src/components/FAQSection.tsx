"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
    projectName: string;
}

export default function FAQSection({ faqs, projectName }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    if (!faqs || faqs.length === 0) return null;

    // Generate FAQ Schema payload
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-[#EEF2F6] border-t border-[#1D4F9C]/30 scroll-mt-32" id="faqs">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-3 mb-10">
                    <span className="w-8 h-[1px] bg-[#1D4F9C]"></span>
                    <h2 className="text-3xl lg:text-4xl font-serif text-[#323334] font-light">Frequently Asked Questions</h2>
                </div>

                <p className="text-[#323334]/80 text-sm mb-12 font-light">
                    Everything you need to know about {projectName}.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-[#1D4F9C]/20 bg-[#FFFFFF] rounded-sm overflow-hidden transition-all duration-300 hover:border-[#1D4F9C]/40">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center bg-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#1D4F9C]/50"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-[#323334] font-medium tracking-wide pr-8">{faq.question}</span>
                                <ChevronDown
                                    size={18}
                                    className={`text-[#1D4F9C] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-6 text-[#323334]/90 font-light leading-relaxed border-t border-[#1D4F9C]/10 pt-4 bg-[#F4F6F9]">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
