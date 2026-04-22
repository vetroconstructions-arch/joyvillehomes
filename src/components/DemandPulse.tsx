'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, Zap } from 'lucide-react';

const signals = [
    { text: "3 NRI buyers from Dubai viewed this project recently", icon: <Users size={14} /> },
    { text: "4 cost sheets downloaded in the last 2 hours", icon: <TrendingUp size={14} /> },
    { text: "High demand signal: 12 interested in 2 BHK Duplex", icon: <Zap size={14} /> },
    { text: "Site office visit scheduled by 2 investors from Mumbai", icon: <Users size={14} /> }
];

export default function DemandPulse() {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const showTimeout = setTimeout(() => setVisible(true), 5000);
        
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % signals.length);
                setVisible(true);
            }, 1000);
        }, 15000);

        return () => {
            clearTimeout(showTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="fixed bottom-8 left-8 z-[80] hidden lg:block pointer-events-none">
            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.9 }}
                        className="bg-white/90 backdrop-blur-md border border-[#C5A059]/30 p-5 rounded-sm shadow-2xl flex items-start gap-4 max-w-xs pointer-events-auto"
                    >
                        <div className="w-8 h-8 bg-[#1D4F9C] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg">
                            {signals[index].icon}
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-[#1D4F9C] uppercase tracking-widest mb-1">Live Market Intelligence</p>
                            <p className="text-xs text-[#323334] font-light leading-snug">{signals[index].text}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
