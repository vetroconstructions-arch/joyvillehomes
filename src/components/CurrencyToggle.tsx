'use client';

import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCurrency } from '@/context/CurrencyContext';

const CURRENCIES = [
    { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
    { code: 'USD', symbol: '$', label: 'US Dollar' },
    { code: 'AED', symbol: 'د.إ', label: 'UAE Dirham' },
    { code: 'GBP', symbol: '£', label: 'British Pound' },
] as const;

export default function CurrencyToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const { currency, setCurrency } = useCurrency();

    const selected = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];
    
    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1D4F9C]/5 border border-[#1D4F9C]/10 hover:border-[#1D4F9C]/30 transition-all group"
            >
                <Globe size={14} className="text-[#1D4F9C]" />
                <span className="text-[10px] font-bold text-[#323334] tracking-widest uppercase">{selected.code}</span>
                <ChevronDown size={10} className={`text-[#323334]/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 bg-white border border-[#EEF2F6] rounded-2xl shadow-xl z-[100] overflow-hidden"
                    >
                        <div className="p-2">
                            {CURRENCIES.map((curr) => (
                                <button
                                    key={curr.code}
                                    onClick={() => {
                                        setCurrency(curr.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                                        selected.code === curr.code 
                                        ? 'bg-[#1D4F9C] text-white' 
                                        : 'hover:bg-[#EEF2F6] text-[#323334]'
                                    }`}
                                >
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs font-bold uppercase">{curr.code}</span>
                                        <span className={`text-[9px] ${selected.code === curr.code ? 'text-white/60' : 'text-[#323334]/40'}`}>{curr.label}</span>
                                    </div>
                                    <span className="text-sm font-serif">{curr.symbol}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
