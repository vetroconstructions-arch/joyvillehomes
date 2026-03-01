"use client";

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lock } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

interface QuickEnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
    projectName: string;
    source?: string;
}

export default function QuickEnquireModal({ isOpen, onClose, projectName, source = "Cost Sheet Unlock" }: QuickEnquireModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // GA4 Event Tracking for Form Initiation
        sendGAEvent('event', 'lead_form_start', {
            project_name: projectName,
            lead_source: source
        });

        try {
            // Setup Web3Forms payload
            const payload = {
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "", // Fetched securely from environment
                subject: `New Lead: ${source} - ${projectName}`,
                from_name: formData.name,
                ...formData,
                project_interest: projectName,
                lead_magnet: source
            };

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                // GA4 Event Tracking for successful lead capture
                sendGAEvent('event', 'lead_form_submit', {
                    project_name: projectName,
                    lead_source: source
                });

                // Auto-close after 3 seconds on success
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', email: '', phone: '' });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-[#323334]/80 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#FFFFFF] z-50 border border-[#C5A059]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#1D4F9C] p-6 text-center relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-[#FFFFFF]/80 hover:text-[#FFFFFF] transition-colors"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>
                            <Lock className="text-[#FFFFFF] mx-auto mb-3 stroke-1" size={32} />
                            <h3 className="text-2xl font-serif text-[#FFFFFF] font-light tracking-wide">Unlock Details</h3>
                            <p className="text-[#FFFFFF]/80 text-[10px] uppercase tracking-widest mt-2">{projectName}</p>
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-[#EEF2F6]">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-8"
                                >
                                    <CheckCircle2 className="text-[#1D4F9C] mx-auto mb-4" size={48} strokeWidth={1} />
                                    <h4 className="text-xl font-serif text-[#323334] mb-2">Access Granted!</h4>
                                    <p className="text-[#1A1A1A] font-light text-sm">Our sales executive will instantly share the detailed Cost Sheet & Floor Plans for {projectName} on your WhatsApp.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <p className="text-center text-[#1A1A1A] text-sm font-light mb-6">
                                        Enter your details to Instantly unlock the Cost Sheet and Premium Floor Plans.
                                    </p>

                                    <div>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#C5A059]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#C5A059] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#C5A059]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#C5A059] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="WhatsApp Number"
                                            pattern="[0-9]{10}"
                                            title="Please enter a valid 10-digit mobile number"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#C5A059]/30 text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#C5A059] transition-colors"
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <p className="text-red-500 text-xs text-center">There was an error submitting your request. Please try again.</p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-[#1D4F9C] text-[#FFFFFF] py-4 text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#323334] transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                    >
                                        {status === 'submitting' ? 'Processing...' : 'Unlock Cost Sheet Now'}
                                    </button>

                                    <p className="text-center text-[10px] text-[#1A1A1A]/60 mt-4 font-light">
                                        By submitting, you authorize Shapoorji Pallonji Real Estate to contact you regarding {projectName}.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
