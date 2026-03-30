"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Currency = 'INR' | 'USD' | 'AED';

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    formatPrice: (priceStr: string) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const RATES = {
    USD: 84, // 1 USD = 84 INR
    AED: 23, // 1 AED = 23 INR
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<Currency>('INR');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
            const saved = localStorage.getItem('pref-currency') as Currency;
            if (saved && ['INR', 'USD', 'AED'].includes(saved)) {
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

        const match = priceStr.match(/₹([\d.]+)\s*(Cr|Lakhs)/i);
        if (!match) return priceStr;

        const value = parseFloat(match[1]);
        const unit = match[2].toLowerCase();
        
        const absoluteInr = unit === 'cr' ? value * 10000000 : value * 100000;
        const converted = absoluteInr / RATES[currency as keyof typeof RATES];
        
        if (currency === 'USD') {
            if (converted >= 1000000) {
                return `$${(converted / 1000000).toFixed(2)}M*`;
            }
            return `$${(converted / 1000).toFixed(0)}K*`;
        }
        
        if (currency === 'AED') {
            if (converted >= 1000000) {
                return `${(converted / 1000000).toFixed(2)}M AED*`;
            }
            return `${(converted / 1000).toFixed(1)}K AED*`;
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
