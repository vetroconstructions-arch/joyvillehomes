"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Award } from "lucide-react";

export default function MarketTicker() {
    const stats = [
        { label: "Hinjewadi Phase 1", value: "+12.4% YoY", trend: "up", icon: <TrendingUp size={14} /> },
        { label: "Hadapsar Precinct", value: "+10.8% YoY", trend: "up", icon: <TrendingUp size={14} /> },
        { label: "Bavdhan Valley", value: "+9.2% YoY", trend: "up", icon: <TrendingUp size={14} /> },
        { label: "Live Bookings", value: "24 this week", trend: "neutral", icon: <Users size={14} /> },
        { label: "Metro Progress", value: "85% Done", trend: "neutral", icon: <Zap size={14} /> },
        { label: "SP Brand Legacy", value: "150+ Years", trend: "neutral", icon: <Award size={14} /> }
    ];

    // Duplicate for seamless loop
    const tickerItems = [...stats, ...stats];

    return (
        <div className="bg-foreground text-white/90 py-3 overflow-hidden border-y border-white/10 select-none">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-12"
                >
                    {tickerItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                            <span className="text-accent">{item.icon}</span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}:</span>
                            <span className="text-[10px] font-mono text-white/70">{item.value}</span>
                            <span className="mx-6 text-white/20">|</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
