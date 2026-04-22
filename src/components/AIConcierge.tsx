'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles, ShieldCheck, User } from 'lucide-react';

const SUGGESTED_QUERIES = [
    "Best 2BHK for investment in Hinjewadi?",
    "Show me projects under ₹80 Lakhs",
    "Which project is closest to Wipro office?",
    "Joyville vs Life Republic comparison?"
];

export default function AIConcierge() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Namaste! I am your Joyville Digital Expert. How can I help you find your dream home in Pune today?' }
    ]);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (text: string = input) => {
        if (!text.trim()) return;
        
        const newMessages = [...messages, { role: 'user', content: text }];
        setMessages(newMessages);
        setInput('');

        // Simulate AI Response based on project logic
        setTimeout(() => {
            let response = "That's a great question! Based on current market data, I recommend looking at Joyville Sensorium for Hinjewadi or Hadapsar Annexe for East Pune. Would you like to see the price list?";
            
            if (text.toLowerCase().includes('hinjewadi')) {
                response = "For Hinjewadi, Joyville Sensorium and Vyomora are top choices. Sensorium is 84% complete and offers riverfront views, while Vyomora is the latest luxury addition. Both are 5 mins from the Metro station.";
            } else if (text.toLowerCase().includes('price') || text.toLowerCase().includes('lakhs')) {
                response = "Joyville projects start at ₹65 Lakhs for 1 BHKs and go up to ₹1.5 Cr+ for luxury 3 BHKs. Which project or configuration should I share the cost sheet for?";
            }
            
            setMessages([...newMessages, { role: 'assistant', content: response }]);
        }, 800);
    };

    return (
        <div className="fixed bottom-24 right-6 z-[9999]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-3xl shadow-2xl border border-[#EEF2F6] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#1D4F9C] p-6 text-white">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                        <Sparkles size={20} className="text-[#C5A059]" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold tracking-wide">Joyville Digital Expert</h4>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                            <span className="text-[10px] text-white/60 uppercase tracking-widest">Powered by Gemini</span>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 p-2 rounded-lg text-[10px] text-white/80">
                                <ShieldCheck size={12} className="text-[#C5A059]" />
                                Verified RERA & Inventory Data
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div 
                            ref={scrollRef}
                            className="flex-1 p-6 overflow-y-auto space-y-4 min-h-[300px] max-h-[450px] bg-[#F8FAFC]"
                        >
                            {messages.map((m, i) => (
                                <motion.div
                                    initial={{ opacity: 0, x: m.role === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={i}
                                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                                        m.role === 'user' 
                                        ? 'bg-[#1D4F9C] text-white rounded-tr-none' 
                                        : 'bg-white text-[#323334] border border-[#EEF2F6] shadow-sm rounded-tl-none'
                                    }`}>
                                        {m.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="p-4 bg-white border-t border-[#EEF2F6]">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {SUGGESTED_QUERIES.map((q, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => handleSend(q)}
                                        className="text-[10px] bg-[#EEF2F6] hover:bg-[#1D4F9C] hover:text-white px-3 py-1.5 rounded-full transition-colors text-[#323334]/60"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask anything about Joyville..."
                                    className="flex-1 bg-[#F8FAFC] border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#1D4F9C] transition-all"
                                />
                                <button 
                                    onClick={() => handleSend()}
                                    className="w-10 h-10 bg-[#1D4F9C] text-white rounded-xl flex items-center justify-center hover:bg-[#0A2A5E] transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#1D4F9C] text-white rounded-full shadow-2xl flex items-center justify-center relative group"
            >
                <div className="absolute inset-0 bg-[#1D4F9C] rounded-full animate-ping opacity-20"></div>
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#C5A059] rounded-full border-2 border-white flex items-center justify-center">
                    <Sparkles size={10} className="text-white" />
                </div>
            </motion.button>
        </div>
    );
}
