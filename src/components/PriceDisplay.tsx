"use client";

import React from 'react';
import { useCurrency } from '@/context/CurrencyContext';

interface PriceDisplayProps {
    price: string;
    className?: string;
}

export default function PriceDisplay({ price, className }: PriceDisplayProps) {
    const { formatPrice } = useCurrency();
    
    // We optionally add the currency symbol prefix if needed, 
    // but formatPrice handles it.
    
    return (
        <span className={className}>
            {formatPrice(price)}
        </span>
    );
}
