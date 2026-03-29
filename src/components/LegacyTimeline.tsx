"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Building2, History, ShieldCheck } from 'lucide-react';
import { ENTITIES } from '@/data/entities';

const timelineEvents = [
  {
    year: "1865",
    title: "Founding Era",
    description: "Pallonji Mistry founds the Littlewood Pallonji & Co., beginning a legacy of engineering excellence in Mumbai.",
    icon: <History size={20} />
  },
  {
    year: "1930s",
    title: "Nation Building",
    description: "Construction of the iconic Reserve Bank of India (RBI) building, establishing the group as a preferred partner for government infrastructure.",
    icon: <Building2 size={20} />
  },
  {
    year: "1970s",
    title: "Global Footprint",
    description: "Expansion into the Middle East with the construction of the Palace of the Sultan of Oman in Muscat.",
    icon: <Award size={20} />
  },
  {
    year: "2016",
    title: "Joyville Brand Birth",
    description: "Launch of Joyville Homes to bring Shapoorji Pallonji quality to the aspirational housing segment in India.",
    icon: <ShieldCheck size={20} />
  },
  {
    year: "2026",
    title: "AI-Native Evolution",
    description: "Dominating the Pune landscape with projects like Vyomora and Sensorium, pioneering sustainable and smart-home living.",
    icon: <Calendar size={20} />
  }
];

const LegacyTimeline: React.FC = () => {
    const timelineSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Shapoorji Pallonji Legacy Timeline",
        "creator": {
            "@type": "Organization",
            "@id": `${ENTITIES.DEVELOPER.url}/#organization`
        },
        "description": ENTITIES.DEVELOPER.story,
        "about": timelineEvents.map(event => ({
            "@type": "Event",
            "name": event.title,
            "startDate": event.year === "1865" ? "1865-01-01" : event.year === "1930s" ? "1930-01-01" : event.year === "1970s" ? "1970-01-01" : event.year === "2016" ? "2016-01-01" : "2026-01-01",
            "location": {
                "@type": "Place",
                "name": event.year === "1970s" ? "Al Alam Palace, Muscat" : event.year === "2026" ? "Joyville Pune" : "Mumbai, India",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": event.year === "1970s" ? "Muscat" : event.year === "2026" ? "Pune" : "Mumbai",
                    "addressCountry": event.year === "1970s" ? "Oman" : "IN"
                }
            },
            "description": event.description,
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode"
        }))
    };

    return (
        <section className="py-24 bg-[#FAFBFC] border-y border-[#E5E7EB] overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineSchema) }} />
            
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C5A059]"
                    >
                        Foundation of Excellence
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-[#323334] font-light italic"
                    >
                        150 Years of <span className="text-[#1D4F9C]">Unshakable Trust</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#323334]/60 text-sm font-light max-w-xl mx-auto leading-relaxed"
                    >
                        Explore the evolutionary journey of the Shapoorji Pallonji Group, from shaping India&apos;s reserve bank to defining the skyline of Pune in 2026.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#E5E7EB] hidden md:block" />
                    
                    <div className="space-y-16 md:space-y-32">
                        {timelineEvents.map((event, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`flex-1 w-full ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`p-8 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 relative group`}>
                                        <span className="text-4xl font-serif text-[#1D4F9C]/10 absolute -top-4 left-6 group-hover:text-[#1D4F9C]/20 transition-colors">{event.year}</span>
                                        <div className="relative z-10 space-y-3">
                                            <h3 className="text-xl font-serif text-[#323334]">{event.title}</h3>
                                            <p className="text-xs text-[#323334]/60 font-light leading-relaxed italic">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="z-20 w-12 h-12 rounded-full bg-white border-4 border-[#1D4F9C]/10 flex items-center justify-center text-[#1D4F9C] shadow-sm">
                                    {event.icon}
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 p-12 bg-white border border-dashed border-[#C5A059]/30 rounded-3xl text-center"
                >
                    <blockquote className="text-xl font-serif italic text-[#323334] max-w-3xl mx-auto mb-6">
                        &quot;Engineering is not just about steel and concrete; it&apos;s about building legacies that endure for generations.&quot;
                    </blockquote>
                    <cite className="text-[10px] uppercase tracking-widest font-bold text-[#C5A059]">The Shapoorji Pallonji Ethos</cite>
                </motion.div>
            </div>
        </section>
    );
};

export default LegacyTimeline;
