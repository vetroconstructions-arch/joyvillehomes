"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const globalFaqs = [
    {
        question: "What are the top Shapoorji Pallonji Joyville projects in Pune?",
        answer: "Our flagship projects include Joyville Sensorium in Hinjewadi Phase 1, offering premium 2 & 3 BHK apartments. In East Pune, Joyville Hadapsar Annexe, Celestia, and the ultra-luxury Skyluxe Edition provide world-class residences near Magarpatta City and SP Infocity. For West Pune, Vanaha in Bavdhan offers an expansive 1000-acre township experience."
    },
    {
        question: "Which Joyville projects offer 2 BHK and 3 BHK flats in Hadapsar?",
        answer: "Joyville Hadapsar Annexe, Celestia, and the ultra-luxury Skyluxe Edition offer spacious 2 BHK and 3 BHK flats in Hadapsar (Shewalewadi). These smart home apartments are ideally located near the SP Infocity and Magarpatta City, offering a pristine lifestyle in the East Pune growth corridor."
    },
    {
        question: "Are there any ready-to-move-in flats available in Joyville Hadapsar Annexe?",
        answer: "Yes, Joyville Hadapsar Annexe offers premium ready-to-move-in flats. Located strategically in East Pune near Magarpatta City and SP Infocity, this 21-acre township features 60+ world-class amenities and immediate possession 1, 2 & 3 BHK options."
    },
    {
        question: "What amenities make Vanaha Bavdhan a premium township in West Pune?",
        answer: "Vanaha Bavdhan is a sprawling 1000-acre township that stands out with its eco-friendly design, 400+ acres of open space, and exclusivity. Projects like Vanaha Golfland and Vanaha Springs offer nature-centric luxury flats and lifestyle upgrades just minutes from Chandni Chowk."
    },
    {
        question: "Why invest in Pune real estate with Shapoorji Pallonji in 2025?",
        answer: "Backed by a 150-year engineering legacy, Shapoorji Pallonji consistently delivers high construction quality, on-time delivery, and high rental yields. Investing in new launch projects in Pune IT hubs like Hinjewadi and Hadapsar ensures long-term capital appreciation."
    },
    {
        question: "Is Joyville Sensorium by Shapoorji Pallonji RERA approved?",
        answer: "Absolutely. All Shapoorji Pallonji Real Estate projects, including Joyville Sensorium, Celestia, and Hadapsar Annexe, are fully MahaRERA registered and compliant, ensuring complete transparency and security for home buyers."
    }
];

export default function GlobalFAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    // Generate FAQ Schema payload
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": globalFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-24 bg-[#FFFFFF] border-t border-[#C5A059]/30 relative overflow-hidden" id="global-faqs">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1D4F9C]/5 blur-[100px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="flex items-center justify-center gap-2 text-[#1D4F9C] text-[10px] tracking-[0.3em] uppercase font-bold mb-4">
                        <HelpCircle size={14} /> Investment Guide
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#323334] font-light mb-6">
                        Frequently Asked <span className="text-[#1D4F9C] italic">Questions</span>
                    </h2>
                    <p className="text-[#323334]/80 text-lg font-light max-w-2xl mx-auto">
                        Everything you need to know about our premium properties, micro-market locations, and the Shapoorji Pallonji legacy in Pune.
                    </p>
                </div>

                <div className="space-y-4">
                    {globalFaqs.map((faq, index) => (
                        <div key={index} className="border border-[#C5A059]/30 bg-[#FFFFFF] rounded-sm overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-[#C5A059]/60">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center bg-[#FFFFFF] transition-colors focus:outline-none focus:ring-1 focus:ring-[#1D4F9C]/50"
                                aria-expanded={openIndex === index}
                            >
                                <span className={`font-medium tracking-wide pr-8 transition-colors duration-300 ${openIndex === index ? 'text-[#1D4F9C]' : 'text-[#323334]'}`}>{faq.question}</span>
                                <ChevronDown
                                    size={18}
                                    className={`text-[#1D4F9C] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-6 text-[#323334]/80 font-light leading-relaxed border-t border-[#C5A059]/10 pt-4 bg-[#EEF2F6]/50">
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
