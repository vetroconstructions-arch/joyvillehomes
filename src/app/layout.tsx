import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import MarketTicker from "@/components/MarketTicker";
import PageTransition from "@/components/PageTransition";
import dynamic from "next/dynamic";

import SEOFooter from "@/components/SEOFooter";
import ClientWrapper from "@/components/ClientWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { ENTITIES } from '@/data/entities';
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
    // 1. Master Brand Keywords (Topical Authority)
    "Shapoorji Pallonji projects Pune", "Shapoorji Pallonji real estate Pune", "Shapoorji Pallonji flats Pune", "Joyville Homes Pune", "Shapoorji Pallonji township Pune", "Shapoorji Pallonji Pune contact number", "official website Shapoorji Pallonji Pune",
    // 2. Project-Level Intent Clusters (Hinjewadi)
    "Joyville Sensorium Hinjewadi price", "Joyville Sensorium floor plan", "Joyville Sensorium brochure PDF", "Joyville Sensorium 2 BHK price Hinjewadi", "Joyville Sensorium possession date", "Joyville Vyomora Hinjewadi price", "Joyville Vyomora floor plan", "Joyville Vyomora brochure download",
    // 3. Project-Level Intent Clusters (Hadapsar)
    "Joyville Hadapsar Annexe price", "Joyville Hadapsar Annexe floor plan", "Joyville Hadapsar brochure", "Joyville Celestia price", "Joyville Celestia floor plan", "Joyville Skyluxe Edition price", "Joyville Hadapsar possession date", "flats near Magarpatta City", "flats near SP Infocity Pune",
    // 4. Project-Level Intent Clusters (Bavdhan)
    "Vanaha Bavdhan price", "Vanaha Springs floor plan", "Vanaha Golfland price", "Vanaha Township Bavdhan", "flats near Oxford Golf Resort Pune", "Bavdhan property price trends",
    // 5. Topical & Intent-Based Search
    "best residential projects Hinjewadi Pune", "investment in Hadapsar Pune", "property price trend Pune 2026", "flats near Magarpatta City and SP Infocity", "luxury apartments Pune", "affordable flats Pune under 70 lakhs", "new launch projects Pune 2026", "RERA registered projects Pune"
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
        {/* Phase 11: Predictive Intent Pre-fetching & Speculation Rules */}
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/press-research" />
        <link rel="prefetch" href="/locality/compare" />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: ["/projects", "/locality/compare", "/press-research"],
                },
                {
                  source: "document",
                  where: {
                    and: [
                      { href_matches: "/projects/*" },
                      { not: { href_matches: ["/projects", "/projects/invest"] } }
                    ]
                  },
                  eagerness: "moderate"
                }
              ],
              prefetch: [
                {
                  source: "document",
                  where: {
                    and: [
                      { href_matches: "/insights/*" },
                      { href_matches: "/location/*" }
                    ]
                  },
                  eagerness: "conservative"
                }
              ]
            })
          }}
        />
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
                "name": ENTITIES.DEVELOPER.name,
                "legalName": ENTITIES.DEVELOPER.legalName,
                "url": ENTITIES.DEVELOPER.url,
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
                "description": `Official Joyville Pune — 9 premium residential projects across Hinjewadi, Hadapsar & Bavdhan. ${ENTITIES.DEVELOPER.legacy} Engineering excellence since 1865.`,
                "foundingDate": "1865-01-01",
                "funder": {
                  "@type": "Organization",
                  "name": "Shapoorji Pallonji Group",
                  "url": "https://www.shapoorjipallonji.com"
                },
                "isoCode": "IN",
                "sameAs": ENTITIES.DEVELOPER.sameAs,
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
                },
                "brand": {
                  "@type": "Brand",
                  "name": ENTITIES.BRAND.name,
                  "description": ENTITIES.BRAND.concept
                },
                "hasPart": [
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Hinjewadi Projects",
                    "url": "https://www.joyville-homes.com/location/hinjewadi"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Hadapsar Projects",
                    "url": "https://www.joyville-homes.com/location/hadapsar"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "name": "Bavdhan Projects",
                    "url": "https://www.joyville-homes.com/location/bavdhan"
                  },
                  {
                    "@type": "Event",
                    "name": "Shapoorji Pallonji 150th Anniversary",
                    "description": "Celebrating a century and a half of engineering excellence and iconic structures across India.",
                    "startDate": "2015-01-01"
                  }
                ],
                "knowsAbout": ENTITIES.DEVELOPER.iconicStructures
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
          <MarketTicker />
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
