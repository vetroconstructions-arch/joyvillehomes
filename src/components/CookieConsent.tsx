"use client";

import { useState, useEffect } from "react";
import { X, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("joyville-cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptConsent = () => {
        localStorage.setItem("joyville-cookie-consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[110]"
                >
                    <div className="bg-[#1A1A1A] border border-[#C5A059]/40 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md relative overflow-hidden group">
                        {/* Interactive Background Accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#C5A059]/10 transition-all duration-700" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-[#C5A059]/10 flex items-center justify-center">
                                    <ShieldCheck size={16} className="text-[#C5A059]" />
                                </div>
                                <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-white">Trust & Data Privacy</h4>
                            </div>

                            <p className="text-[11px] text-white/60 font-light leading-relaxed mb-6">
                                We use proprietary cookies and Meta Pixel trackers to personalize your investment profile and 
                                provide advanced real-estate insights. By using our platform, you agree to our 
                                <Link href="/privacy-policy" className="text-[#C5A059] hover:underline ml-1">Privacy Policy</Link>.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={acceptConsent}
                                    className="flex-grow bg-[#C5A059] text-white py-3 text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                                >
                                    Accept & Continue
                                </button>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="px-4 border border-white/10 text-white/40 hover:text-white transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={14} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
