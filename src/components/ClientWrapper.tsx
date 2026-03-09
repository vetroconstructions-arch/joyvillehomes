'use client';

import dynamic from 'next/dynamic';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <MobileStickyCTA />
            <FloatingWhatsApp />
        </>
    );
}
