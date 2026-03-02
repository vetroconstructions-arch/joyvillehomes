"use client";

import { motion } from "framer-motion";
import { Train, Move, Briefcase, Star } from "lucide-react";

interface ProximityIndexProps {
    scores: {
        metro: number;
        ringRoad: number;
        itHub: number;
    };
    projectName: string;
}

export default function ProximityIndex({ scores, projectName }: ProximityIndexProps) {
    const averageScore = ((scores.metro + scores.ringRoad + scores.itHub) / 3).toFixed(1);

    const scoreItems = [
        { label: "Metro Connectivity", score: scores.metro, icon: <Train size={18} />, color: "bg-blue-500" },
        { label: "Ring Road Access", score: scores.ringRoad, icon: <Move size={18} />, color: "bg-emerald-500" },
        { label: "IT Hub Proximity", score: scores.itHub, icon: <Briefcase size={18} />, color: "bg-amber-500" }
    ];

    return (
        <div className="bg-white border border-accent/20 rounded-sm p-8 shadow-xl font-sans">
            <div className="flex justify-between items-center mb-10 border-b border-accent/10 pb-6">
                <div>
                    <h3 className="text-xl font-serif italic mb-1">Infrastructure Proximity Index</h3>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Real-time appreciation catalyst</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-1 text-accent font-serif text-3xl">
                        <Star className="fill-accent" size={24} /> {averageScore}
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Expert Score</span>
                </div>
            </div>

            <div className="space-y-8">
                {scoreItems.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                        <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                            <div className="flex items-center gap-3">
                                <span className="text-accent">{item.icon}</span>
                                {item.label}
                            </div>
                            <span className="font-serif text-lg">{item.score}/10</span>
                        </div>
                        <div className="h-2 bg-secondary/30 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.score * 10}%` }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className={`h-full ${item.color} rounded-full`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 pt-8 border-t border-accent/10">
                <p className="text-xs font-light text-muted-foreground leading-relaxed italic">
                    * This proprietary score is calculated based on the project&apos;s literal distance to upcoming <span className="text-foreground font-medium">Metro Line 3</span> hubs and <span className="text-foreground font-medium">170km Pune Ring Road</span> entry points.
                </p>
            </div>
        </div>
    );
}
