"use client";

import { MessageCircle } from 'lucide-react';
import { sendGAEvent } from '@next/third-parties/google';

export default function FloatingWhatsApp() {
    const handleWhatsAppClick = () => {
        sendGAEvent('event', 'whatsapp_click', {
            event_category: 'Lead Generation',
            event_label: 'Desktop Floating Widget'
        });

        // Meta Pixel Tracking for WhatsApp micro-conversion
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof window !== 'undefined' && (window as any).fbq) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).fbq('track', 'Contact', { content_name: 'WhatsApp Initiation' });
        }
    };

    return (
        <a
            href="https://wa.me/917744009295?text=I'm%20interested%20in%20Joyville%20Homes%20Pune."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={24} />
            <span className="font-bold tracking-widest uppercase text-[10px]">WhatsApp</span>
        </a>
    );
}
