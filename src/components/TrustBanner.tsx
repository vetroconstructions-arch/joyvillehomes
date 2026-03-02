"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Landmark, CheckCircle2 } from "lucide-react";

const trustPoints = [
    {
        icon: <Landmark className="text-accent" size={32} strokeWidth={1} />,
        title: "150+ Year Legacy",
        description: "Built on trust, engineering excellence, and the Shapoorji Pallonji heritage since 1865."
    },
    {
        icon: <Award className="text-accent" size={32} strokeWidth={1} />,
        title: "MahaRERA Registered",
        description: "Every Joyville project is RERA certified, ensuring 100% transparency and timely delivery."
    },
    {
        icon: <ShieldCheck className="text-accent" size={32} strokeWidth={1} />,
        title: "Advanced Construction",
        description: "Utilizing Aluform monolithic technology for superior strength and leak-proof finishes."
    }
];

export default function TrustBanner() {
    return (
        <section className="py-24 bg-secondary/20 border-y border-border overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif mb-4 italic">The Shapoorji Pallonji <span className="text-accent">Stamp of Excellence</span></h2>
                    <p className="text-muted-foreground font-light max-w-2xl mx-auto">Why thousands of families choose Joyville as their lifelong residential destination in Pune.</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {trustPoints.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-6 bg-white border border-border shadow-lg group-hover:scale-110 transition-transform duration-500">
                                {point.icon}
                            </div>
                            <h3 className="text-xl font-serif mb-3">{point.title}</h3>
                            <p className="text-sm font-light text-muted-foreground leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 items-center pt-10 border-t border-border"
                >
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                        <CheckCircle2 size={14} className="text-accent" /> ISO Certified Quality
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                        <CheckCircle2 size={14} className="text-accent" /> Eco-friendly Green Homes
                    </div>
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground/60">
                        <CheckCircle2 size={14} className="text-accent" /> Smart Lifestyle Amenities
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
