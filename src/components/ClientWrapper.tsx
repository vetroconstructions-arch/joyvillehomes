'use client';

import dynamic from 'next/dynamic';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import { CurrencyProvider } from '@/context/CurrencyContext';

const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <CurrencyProvider>
            {children}
            <MobileStickyCTA />
            <FloatingWhatsApp />
        </CurrencyProvider>
    );
}
