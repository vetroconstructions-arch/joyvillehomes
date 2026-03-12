"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ChevronRight, MessageSquare, Play, Volume2 } from 'lucide-react';

interface AnswerItem {
    q: string;
    a: string;
}

interface ConversationalAnswerHubProps {
    projectName: string;
    answers: AnswerItem[];
}

const ConversationalAnswerHub: React.FC<ConversationalAnswerHubProps> = ({ projectName, answers }) => {
    if (!answers || answers.length === 0) return null;

    const speakableSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${projectName} Conversational Intelligence Hub`,
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".conversational-question", ".conversational-answer"]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": answers.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <section className="py-24 bg-[#1D4F9C] text-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FFFFFF]/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#C5A059]/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold">
                            <Mic size={14} className="text-[#C5A059] animate-pulse" /> Voice Search Optimized
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif leading-tight">
                            Conversational <br /> <span className="italic text-[#C5A059]">Intelligence Hub</span>
                        </h2>
                        <p className="text-lg text-white/70 font-light leading-relaxed max-w-xl">
                            Our proprietary Knowledge Engine answers the most complex questions about {projectName}, structured specifically for the next generation of AI search agents.
                        </p>
                        
                        <div className="flex items-center gap-4 pt-4">
                            <button className="flex items-center gap-3 px-8 py-4 bg-[#C5A059] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#1D4F9C] transition-all duration-300">
                                <Play size={14} fill="currentColor" /> Preview Audio Response
                            </button>
                            <div className="hidden lg:flex items-center gap-2 text-white/40 italic text-xs">
                                <Volume2 size={14} /> Optimized for Speakable AI Extractors
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-6">
                        {answers.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-[#1D4F9C] font-bold text-xs shrink-0">
                                        Q
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-serif italic text-white group-hover:text-[#C5A059] transition-colors conversational-question">
                                            {item.q}
                                        </h3>
                                        <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                                            <p className="text-sm text-white/60 font-light leading-relaxed conversational-answer">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConversationalAnswerHub;
