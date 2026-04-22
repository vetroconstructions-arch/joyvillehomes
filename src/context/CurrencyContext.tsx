"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'INR' | 'USD' | 'AED' | 'GBP';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    formatPrice: (priceStr: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const RATES = {
    USD: 84, // 1 USD = 84 INR
    AED: 23, // 1 AED = 23 INR
    GBP: 108, // 1 GBP = 108 INR
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>('INR');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            const saved = localStorage.getItem('pref-currency') as Currency;
            if (saved && ['INR', 'USD', 'AED', 'GBP'].includes(saved)) {
                setCurrency(saved);
            }
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const handleSetCurrency = (newCurrency: Currency) => {
        setCurrency(newCurrency);
        localStorage.setItem('pref-currency', newCurrency);
    };

    const formatPrice = (priceStr: string) => {
        if (!mounted || currency === 'INR') return priceStr;

        const match = priceStr.match(/₹([\d.]+)\s*(Cr|Lakhs|L)/i);
        if (!match) return priceStr;

        const value = parseFloat(match[1]);
        const unit = match[2].toLowerCase();
        
        const absoluteInr = (unit === 'cr') ? value * 10000000 : value * 100000;
        const converted = absoluteInr / RATES[currency as keyof typeof RATES];
        
        if (currency === 'USD') {
            if (converted >= 1000000) return `$${(converted / 1000000).toFixed(2)}M*`;
            return `$${Math.round(converted / 1000)}K*`;
        }
        
        if (currency === 'AED') {
            if (converted >= 1000000) return `${(converted / 1000000).toFixed(2)}M AED*`;
            return `${Math.round(converted / 1000)}K AED*`;
        }

        if (currency === 'GBP') {
            if (converted >= 1000000) return `£${(converted / 1000000).toFixed(2)}M*`;
            return `£${Math.round(converted / 1000)}K*`;
        }

        return priceStr;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency: handleSetCurrency, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) throw new Error('useCurrency must be used within CurrencyProvider');
    return context;
};
