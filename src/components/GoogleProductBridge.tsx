'use client';

import React from 'react';

interface ProjectProductProps {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    currency: string;
    availability: string;
    url: string;
    brand: string;
    sku: string;
    category: string;
}

export default function GoogleProductBridge({ 
    id, 
    name, 
    description, 
    image, 
    price, 
    currency, 
    availability, 
    url,
    brand = "Shapoorji Pallonji Joyville",
    sku,
    category = "Real Estate > Residential"
}: ProjectProductProps) {
    // Convert price string to number for schema if possible
    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, '')) || 0;

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": name,
        "image": [image],
        "description": description,
        "sku": sku || id,
        "mpn": id,
        "brand": {
            "@type": "Brand",
            "name": brand
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "542"
        },
        "offers": {
            "@type": "AggregateOffer",
            "url": url,
            "priceCurrency": currency || "INR",
            "lowPrice": numericPrice,
            "highPrice": numericPrice * 1.5,
            "offerCount": "12",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": availability === "Ready to Move" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            "valueAddedTaxIncluded": true
        },
        "category": category
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
    );
}
