"use client";

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    if (!isVisible) return null;

    const handleCallClick = () => {
        sendGAEvent('event', 'click_to_call', {
            event_category: 'Lead Generation',
            event_label: 'Mobile Sticky CTA'
        });
    };

    const handleWhatsAppClick = () => {
        sendGAEvent('event', 'whatsapp_click', {
            event_category: 'Lead Generation',
            event_label: 'Mobile Sticky CTA'
        });
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#FFFFFF] border-t border-[#C5A059]/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex">
            <a
                href="tel:+917744009295"
                onClick={handleCallClick}
                className="flex-1 flex items-center justify-center gap-2 py-4 text-[#323334] font-bold text-xs uppercase tracking-widest border-r border-[#C5A059]/20 bg-[#EEF2F6] active:bg-[#1D4F9C]/10 transition-colors"
                aria-label="Call Shapoorji Pallonji Sales Now"
            >
                <Phone size={16} className="text-[#1D4F9C]" /> Call Now
            </a>
            <a
                href="https://wa.me/917744009295?text=I'm%20interested%20in%20Joyville%20Homes%20Pune."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1D4F9C] text-[#FFFFFF] font-bold text-xs uppercase tracking-widest active:bg-[#323334] transition-colors"
                aria-label="Start a WhatsApp chat with our sales team"
            >
                <MessageCircle size={16} /> WhatsApp
            </a>
        </div>
    );
}
