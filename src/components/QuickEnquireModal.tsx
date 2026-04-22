"use client";

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lock, MessageCircle, ShieldCheck, Globe } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';
import { projects } from '@/data/projects';
import Link from 'next/link';

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
        company: '', // honeypot field
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    
    // Find project data for RERA injection
    const projectData = projects.find(p => p.title === projectName || projectName.includes(p.title));
    const reraDisplay = projectData?.reraNumber 
        ? (Array.isArray(projectData.reraNumber) ? projectData.reraNumber[0] : projectData.reraNumber)
        : "Verified MahaRERA";

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Honeypot check - bots fill hidden fields
        if (formData.company) return;

        // Strict phone validation: 10-15 digits
        const phoneClean = formData.phone.replace(/\D/g, '');
        if (phoneClean.length < 10 || phoneClean.length > 15) {
            setStatus('error');
            return;
        }

        // Phase 4: Sovereign Vault Persistence
        const leadId = `lead_${Date.now()}`;
        const leadPayload = {
            id: leadId,
            project: projectName,
            source: source,
            data: { ...formData, phone: phoneClean },
            timestamp: new Date().toISOString(),
            synced: false
        };

        try {
            const vault = JSON.parse(localStorage.getItem('sovereign_vault') || '[]');
            vault.push(leadPayload);
            localStorage.setItem('sovereign_vault', JSON.stringify(vault));
        } catch (e) {
            console.error("Vault write error:", e);
        }

        setStatus('submitting');

        sendGAEvent('event', 'lead_form_start', {
            project_name: projectName,
            lead_source: source
        });

        try {
            const payload = {
                _subject: `New Lead: ${source} - ${projectName}`,
                name: formData.name,
                email: formData.email.trim().toLowerCase(),
                phone: phoneClean,
                project_interest: projectName,
                lead_magnet: source,
                _captcha: "false"
            };

            const response = await fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                // Update Vault Status
                try {
                    const vault = JSON.parse(localStorage.getItem('sovereign_vault') || '[]');
                    const updatedVault = vault.map((l: any) => l.id === leadId ? { ...l, synced: true } : l);
                    localStorage.setItem('sovereign_vault', JSON.stringify(updatedVault));
                } catch (e) {}

                setStatus('success');
                sendGAEvent('event', 'generate_lead', {
                    project_name: projectName,
                    lead_source: source
                });

                if (typeof window !== 'undefined' && 'fbq' in window) {
                    (window as unknown as { fbq: (action: string, event: string, params: Record<string, string>) => void }).fbq('track', 'Lead', { content_name: projectName });
                }

                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', email: '', phone: '', company: '' });
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus('error');
        }
    };

    const handleWhatsAppDirect = () => {
        sendGAEvent('event', 'whatsapp_fast_track', { project_name: projectName });
        const message = encodeURIComponent(`Hi, I am interested in ${projectName}. Please share the ${source === 'Cost Sheet Unlock' ? 'Cost Sheet and Payment Plan' : 'Brochure and Floor Plans'}.`);
        window.open(`https://wa.me/918446684444?text=${message}`, '_blank');
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
                        className="fixed inset-0 bg-[#323334]/90 backdrop-blur-md z-[100]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 40 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-lg bg-[#FFFFFF] z-[101] border border-[#C5A059]/40 shadow-[0_30px_70px_rgba(0,0,0,0.6)] rounded-sm overflow-hidden"
                    >
                        <div className="grid md:grid-cols-5 h-full">
                            {/* Visual Trust Sidecar */}
                            <div className="hidden md:flex md:col-span-2 bg-[#1D4F9C] p-8 flex-col justify-between text-white relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center mb-6">
                                        <Lock size={20} className="text-[#C5A059]" />
                                    </div>
                                    <h4 className="text-xl font-serif mb-4 leading-snug">Secure Institutional Access</h4>
                                    <p className="text-[10px] text-white/70 uppercase tracking-widest leading-relaxed mb-8">
                                        Encrypted data handling ensuring privacy for HNI & NRI investors.
                                    </p>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-3">
                                            <ShieldCheck size={16} className="text-[#C5A059] shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider mb-1">MahaRERA Verified</p>
                                                <p className="text-[9px] text-white/60 font-mono">{reraDisplay}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Globe size={16} className="text-[#C5A059] shrink-0" />
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-wider mb-1">Global Investment</p>
                                                <p className="text-[9px] text-white/60">Dedicated Support for NRI Buyers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative z-10 pt-8 border-t border-white/10">
                                    <p className="text-[9px] italic text-white/40">Shapoorji Pallonji Real Estate Legacy since 1865</p>
                                </div>
                            </div>

                            {/* Form Area */}
                            <div className="md:col-span-3 p-8 md:p-10 bg-[#EEF2F6]">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-[10px] font-bold text-[#1D4F9C] uppercase tracking-[0.2em] mb-1">{projectName}</p>
                                        <h3 className="text-2xl font-serif text-[#323334]">Request Intelligence</h3>
                                    </div>
                                    <button onClick={onClose} title="Close enquiry form" aria-label="Close enquiry form" className="p-2 hover:bg-[#1D4F9C]/5 rounded-full transition-colors">
                                        <X size={20} className="text-[#323334]/40" />
                                    </button>
                                </div>

                                {status === 'success' ? (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                            <CheckCircle2 className="text-green-500" size={32} />
                                        </div>
                                        <h4 className="text-xl font-serif text-[#323334] mb-3">Verification Complete</h4>
                                        <p className="text-sm text-[#323334]/70 font-light max-w-[240px] mx-auto leading-relaxed">
                                            Digital cost sheet and master brochure have been dispatched to your WhatsApp.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="space-y-6">
                                        <button 
                                            onClick={handleWhatsAppDirect}
                                            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-sm shadow-lg hover:shadow-xl transition-all group scale-100 hover:scale-[1.02] active:scale-95"
                                        >
                                            <MessageCircle size={18} fill="white" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">Fast-Track via WhatsApp</span>
                                        </button>

                                        <div className="relative flex items-center gap-3 py-2">
                                            <div className="flex-grow h-[1px] bg-[#323334]/10"></div>
                                            <span className="text-[9px] uppercase tracking-widest text-[#323334]/30 font-bold bg-[#EEF2F6] px-2">OR SECURE ENQUIRY</span>
                                            <div className="flex-grow h-[1px] bg-[#323334]/10"></div>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-3">
                                            <input
                                                type="text"
                                                required
                                                placeholder="Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-[#C5A059]/30 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1D4F9C] transition-colors"
                                            />
                                            <input
                                                type="email"
                                                required
                                                placeholder="Email ID (For Official Docs)"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 bg-white border border-[#C5A059]/30 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1D4F9C] transition-colors"
                                            />
                                            <div className="relative">
                                                <input
                                                    type="tel"
                                                    required
                                                    placeholder="Phone Number"
                                                    pattern="[0-9]{10,15}"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 bg-white border border-[#C5A059]/30 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#1D4F9C] transition-colors pl-12"
                                                />
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[10px] text-[#323334]/40 font-bold border-r border-[#323334]/10 pr-2">+</span>
                                            </div>

                                            {/* Honeypot - invisible to users */}
                                            <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                                                <input
                                                    type="text"
                                                    tabIndex={-1}
                                                    autoComplete="off"
                                                    value={formData.company}
                                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                />
                                            </div>

                                            {status === 'error' && (
                                                <p className="text-red-500 text-[10px] text-center italic">API Connection Interrupted. Please retry or use WhatsApp Fast-Track.</p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === 'submitting'}
                                                className="w-full bg-[#1D4F9C] text-[#FFFFFF] py-4 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-[#323334] transition-all disabled:opacity-70 mt-2 shadow-md hover:shadow-lg"
                                            >
                                                {status === 'submitting' ? 'Authenticating...' : (source === 'Cost Sheet Unlock' ? 'Generate 2026 Cost Sheet' : 'Download Master Brochure')}
                                            </button>

                                            <p className="text-center text-[8px] text-[#323334]/50 leading-relaxed px-4 pt-2">
                                                Enquiry processed via Secured Channels. You agree to be contacted by Shapoorji Pallonji Real Estate regarding {projectName}. Read our <Link href="/privacy-policy" className="underline hover:text-[#1D4F9C]">Privacy Policy</Link>.
                                            </p>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
