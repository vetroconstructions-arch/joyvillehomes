import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import dynamic from "next/dynamic";

import SEOFooter from "@/components/SEOFooter";
import ClientWrapper from "@/components/ClientWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.joyville-homes.com'),
  title: "Joyville Homes Pune | Shapoorji Pallonji | 2 & 3 BHK Flats in Hinjewadi, Hadapsar, Bavdhan",
  description: "Official Joyville Pune by Shapoorji Pallonji Real Estate. Explore 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65 Lakhs. RERA approved. Check price list, floor plans & book a site visit today.",
  keywords: [
    // Brand Core
    "Joyville Homes Pune", "Shapoorji Pallonji Pune", "Shapoorji Pallonji Real Estate Pune", "Joyville Pune projects", "Shapoorji Pallonji Joyville 2026", "Shapoorji Pallonji residential Pune", "Joyville homes official website", "Shapoorji Pallonji 150 year legacy",
    // Hinjewadi Micro-Market
    "flats in Hinjewadi", "2 BHK flats in Hinjewadi", "3 BHK apartments Hinjewadi", "luxury apartments Hinjewadi Phase 1", "Joyville Sensorium Hinjewadi", "new launch Hinjewadi 2025", "new launch Hinjewadi 2026", "property rates Hinjewadi 2025", "property rates Hinjewadi 2026", "flats near Rajiv Gandhi Infotech Park", "walk to work apartments Hinjewadi", "projects near Maan Village Hinjewadi", "flats near Wipro Hinjewadi", "flats near Infosys Pune", "flats near TCS Hinjewadi", "flats near Cognizant Hinjewadi", "Hinjewadi Phase 1 residential projects", "smart homes Hinjewadi Pune", "gated community Hinjewadi Phase 1", "Pune Metro Line 3 Hinjewadi flats",
    // Hadapsar Micro-Market
    "flats in Hadapsar Pune", "Joyville Hadapsar Annexe", "ready to move flats Hadapsar", "flats near Magarpatta City", "flats near EON IT Park Kharadi", "flats near SP Infocity Phursungi", "1 BHK flats Hadapsar", "2 BHK flats Hadapsar", "3 BHK flats Hadapsar", "affordable flats Pune East", "township projects Hadapsar", "Joyville Celestia Hadapsar", "Joyville Skyluxe Hadapsar", "Wildernest SP Kingstown Pune", "Shewalewadi flats for sale", "Shewalewadi property rates 2026", "Pune Solapur Highway residences", "flats near Amanora Mall", "flats near Seasons Mall Hadapsar", "flats near Noble Hospital Hadapsar", "Hadapsar Kharadi bypass properties", "Manjri Hadapsar corridor flats",
    // Bavdhan Micro-Market
    "flats in Bavdhan Pune", "Vanaha Bavdhan", "Vanaha Golfland", "Vanaha Springs Bavdhan", "golf course view apartments Pune", "1000 acre township Pune", "Shapoorji Pallonji Bavdhan township", "flats near Oxford Golf Resort", "hills view apartments Pune", "Bavdhan real estate investment 2026", "nature homes Bavdhan", "premium apartments Bavdhan", "Bavdhan property appreciation",
    // Growth Corridor
    "Shapoorji Treetopia Pune", "NA bungalow plots Pune", "plots near Purandar Airport", "Purandar airport real estate", "Jadhavwadi property investment", "Saswad Road plots", "Pune growth corridor real estate",
    // Transactional Intent
    "Shapoorji Pallonji Pune price list 2025", "Shapoorji Pallonji Pune price list 2026", "Joyville Pune floor plans", "RERA approved projects Pune", "MahaRERA registered projects Pune", "NRI investment flats Pune", "buy 2 BHK flat Hinjewadi under 1 crore", "buy property Pune 2026", "flats for sale Pune 2026", "new projects Pune 2026", "ready to move flats Pune", "luxury apartments Pune", "affordable housing Pune", "investment property Pune 2026", "rental income Pune property", "best areas invest Pune 2026",
    // Competitor Gap
    "Joyville vs Kolte Patil Life Republic", "Joyville Hinjewadi vs Godrej Park Greens", "Joyville Hadapsar vs Amanora", "Joyville vs VTP Bellissimo", "Joyville vs Pride Purple Pune", "Joyville vs Gera Developments", "best residential projects Hinjewadi 2025", "best residential projects Hinjewadi 2026", "best residential projects Hadapsar 2026", "best residential projects Bavdhan 2026", "integrated township Pune",
    // Infrastructure & Market
    "Pune real estate market 2026", "Pune property trends 2026", "Pune infrastructure development 2026", "Pune Metro impact real estate", "Pune Ring Road properties", "Pune IT hub real estate", "Pune housing market forecast", "Pune property appreciation rates", "Pune micro market analysis",
    // Long-Tail Budget Intent
    "1 BHK flat Pune under 70 lakhs", "2 BHK flat Pune under 1 crore", "3 BHK flat Pune under 1.5 crore", "luxury penthouse Pune", "flats for IT professionals Pune", "smart home apartments Pune", "sustainable housing Pune", "EDGE certified homes Pune", "biophilic homes Pune"
  ],
  openGraph: {
    title: "Joyville Homes Pune | Shapoorji Pallonji Real Estate | 9 Premium Projects",
    description: "Explore Joyville Pune by Shapoorji Pallonji – 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65L. RERA approved.",
    url: "https://www.joyville-homes.com",
    siteName: "Joyville Homes Pune",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joyville Homes Pune by Shapoorji Pallonji — Premium 2 & 3 BHK Residences",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyville Homes Pune | Shapoorji Pallonji | 2 & 3 BHK from ₹65L",
    description: "9 premium projects across Hinjewadi, Hadapsar & Bavdhan. RERA approved. Check price list & floor plans.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: 'https://www.joyville-homes.com',
    languages: {
      'en-IN': 'https://www.joyville-homes.com',
      'x-default': 'https://www.joyville-homes.com',
    },
  },
  verification: {
    google: "kgXogw_uAx3DIkOTR_Ysq5ZB6Jh_rpezL9F13KvpMro",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1D4F9C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents iOS Safari from zooming in on input focus
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-white`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.joyville-homes.com/#website",
                "url": "https://www.joyville-homes.com",
                "name": "Joyville Homes Pune",
                "publisher": {
                  "@id": "https://www.joyville-homes.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.joyville-homes.com/projects?search={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "Organization",
                "@id": "https://www.joyville-homes.com/#organization",
                "name": "Joyville Homes by Shapoorji Pallonji",
                "alternateName": "Shapoorji Pallonji Real Estate",
                "url": "https://www.joyville-homes.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.joyville-homes.com/logo.png",
                  "width": "512",
                  "height": "512"
                },
                "image": "https://www.joyville-homes.com/og-image.jpg",
                "founder": {
                  "@type": "Person",
                  "name": "Pallonji Mistry"
                },
                "description": "Official Joyville Pune — 9 premium residential projects across Hinjewadi, Hadapsar & Bavdhan. 150+ years of Shapoorji Pallonji engineering legacy.",
                "foundingDate": "1865-01-01",
                "funder": {
                  "@type": "Organization",
                  "name": "Shapoorji Pallonji Group",
                  "url": "https://www.shapoorjipallonji.com"
                },
                "isoCode": "IN",
                "sameAs": [
                  "https://www.facebook.com/ShapoorjiPallonjiRealEstate/",
                  "https://www.linkedin.com/company/shapoorji-pallonji-real-estate/",
                  "https://www.instagram.com/shapoorjipallonjirealestate/",
                  "https://x.com/SPRealEstate",
                  "https://www.youtube.com/c/ShapoorjiPallonjiRealEstate"
                ],
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+912067210000",
                    "contactType": "sales",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi", "Marathi"]
                  },
                  {
                    "@type": "ContactPoint",
                    "telephone": "+912067210001",
                    "contactType": "customer service",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                  }
                ],
                "member": {
                  "@type": "Organization",
                  "@id": "https://www.joyville-homes.com/#research-desk",
                  "name": "Shapoorji Pallonji Premium Research Desk",
                  "description": "The expert analysis wing of Shapoorji Pallonji Real Estate, specializing in Pune property market trends, infrastructure impact reports, and NRI investment feasibility studies.",
                  "knowsAbout": [
                    "Pune Real Estate Market",
                    "Infrastructure Development Impact",
                    "NRI Property Investment Feasibility",
                    "Real Estate ROI Analysis"
                  ]
                }
              },
              {
                "@type": "ItemList",
                "@id": "https://www.joyville-homes.com/#navigation",
                "name": "Main Navigation",
                "itemListElement": [
                  { "@type": "SiteNavigationElement", "position": 1, "name": "Premium Projects", "url": "https://www.joyville-homes.com/projects" },
                  { "@type": "SiteNavigationElement", "position": 2, "name": "Localities", "url": "https://www.joyville-homes.com/location" },
                  { "@type": "SiteNavigationElement", "position": 3, "name": "Homebuyer's Guide", "url": "https://www.joyville-homes.com/pune-real-estate-guide" },
                  { "@type": "SiteNavigationElement", "position": 4, "name": "Comparison Matrix", "url": "https://www.joyville-homes.com/insights/joyville-vs-competitors" },
                  { "@type": "SiteNavigationElement", "position": 5, "name": "Analytics & Insights", "url": "https://www.joyville-homes.com/insights" }
                ]
              },
              {
                "@type": ["RealEstateAgent", "LocalBusiness"],
                "@id": "https://www.joyville-homes.com/#realestate",
                "name": "Joyville Homes — Shapoorji Pallonji Real Estate, Pune",
                "image": "https://www.joyville-homes.com/og-image.jpg",
                "url": "https://www.joyville-homes.com",
                "telephone": "+912067210000",
                "priceRange": "₹65 Lakhs - ₹3 Cr",
                "paymentAccepted": ["Wire Transfer", "Cheque"],
                "currenciesAccepted": "INR, USD, AED, GBP",
                "parentOrganization": {
                  "@id": "https://www.joyville-homes.com/#organization"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Hinjewadi Phase 1, Near Rajiv Gandhi Infotech Park",
                  "addressLocality": "Pune",
                  "addressRegion": "Maharashtra",
                  "postalCode": "411057",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 18.5913,
                  "longitude": 73.7389
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                "areaServed": [
                  { "@type": "City", "name": "Pune" },
                  { "@type": "State", "name": "Maharashtra" }
                ],
                "makesOffer": [
                  { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "2 BHK Apartments" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "3 BHK Apartments" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "NA Bungalow Plots" } }
                ]
              },
              {
                "@type": "Dataset",
                "@id": "https://www.joyville-homes.com/#dataset-trends",
                "name": "Pune Real Estate Appreciation Trends 2024-2026",
                "description": "Comprehensive dataset tracking capital appreciation, rental yields, and infrastructure impact across Pune's key micro-markets (Hinjewadi, Hadapsar, Bavdhan).",
                "publisher": {
                  "@id": "https://www.joyville-homes.com/#organization"
                },
                "license": "https://creativecommons.org/licenses/by/4.0/",
                "variableMeasured": [
                  "Capital Appreciation Rate",
                  "Rental Yield",
                  "Average Price Per Sq.Ft."
                ],
                "spatialCoverage": {
                  "@type": "Place",
                  "name": "Pune, Maharashtra, India"
                },
                "temporalCoverage": "2024-01-01/2026-12-31"
              }
            ]
          })
        }} />
        <ClientWrapper>
          <div className="min-h-screen flex flex-col relative text-foreground">
            <Navigation />
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <SEOFooter />
        </ClientWrapper>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        {/* Meta Pixel Code Injection - Loaded post-hydration to protect INP scores */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID || ""}');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
