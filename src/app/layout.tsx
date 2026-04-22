import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import MarketTicker from "@/components/MarketTicker";
import PageTransition from "@/components/PageTransition";
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import IntentLinkCluster from '@/components/IntentLinkCluster';
import GoogleProductBridge from '@/components/GoogleProductBridge';
import SGEAnswerHub from '@/components/SGEAnswerHub';
import DemandPulse from '@/components/DemandPulse';
import { projects } from '@/data/projects';
import SEOFooter from "@/components/SEOFooter";
import CookieConsent from "@/components/CookieConsent";
import ClientWrapper from "@/components/ClientWrapper";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import SovereignExitIntent from "@/components/SovereignExitIntent";
import AIConcierge from "@/components/AIConcierge";
import { ENTITIES } from '@/data/entities';
import { experts } from "@/data/experts";
import { KEYWORD_MATRIX } from "@/data/KeywordIntelligence";
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
  metadataBase: new URL('https://joyville-homes.com'),
  title: {
    template: "%s | Joyville Homes Pune | Shapoorji Pallonji",
    default: "Joyville Homes Pune | Shapoorji Pallonji | Top Real Estate in Pune",
  },
  description: "Official Joyville Pune by Shapoorji Pallonji Real Estate. Explore 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65 Lakhs. RERA approved. Dive into the Pune real estate market today.",
  keywords: [
    ...KEYWORD_MATRIX.MACRO_PUNE,
    ...KEYWORD_MATRIX.SITE_WIDE_HARDENED_KEYWORDS,
    "Joyville Vyomora Hinjewadi price", "Joyville Sensorium for sale", "Vanaha Golfland Bavdhan floor plan", 
    "Joyville Hadapsar Annexe ready possession", "Joyville Celestia new launch", "Joyville Skyluxe Edition ultra luxury",
    "Wildernest at SP Kingstown Pune", "Pune real estate investment 2026", "flats near Hinjewadi Metro Station",
    "Shapoorji Pallonji Pune projects contact", "best gated community in Pune west", "ready to move flats in Pune east"
  ],
  openGraph: {
    title: "Joyville Homes Pune | Shapoorji Pallonji Real Estate | 9 Premium Projects",
    description: "Explore Joyville Pune by Shapoorji Pallonji – 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65L. RERA approved.",
    url: "https://joyville-homes.com",
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
  verification: {
    google: "kgXogw_uAx3DlkOTR_Ysq5ZB6Jh_rpezL9F13KvpMro",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'indexifembedded': true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Joyville Homes",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D4F9C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="prefetch" href="/projects" />
        <link rel="prefetch" href="/press-research" />
        <link rel="prefetch" href="/locality/compare" />
        {projects.slice(0, 4).map(project => (
          <GoogleProductBridge 
            key={project.id}
            id={project.id}
            name={project.title}
            description={project.description}
            image={project.image}
            price={project.price.split(' ')[0] || "65"} 
            currency="INR"
            availability={project.status}
            url={`https://joyville-homes.com/projects/${project.slug}`}
            sku={project.id}
            brand="Shapoorji Pallonji Joyville"
            category="Real Estate > Residential"
          />
        ))}
        <SGEAnswerHub />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: ["/projects", "/locality/compare", "/press-research", "/flats-in-pune"],
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
                    or: [
                      { href_matches: "/insights/*" },
                      { href_matches: "/location/*" },
                      { href_matches: "/properties/*" }
                    ]
                  },
                  eagerness: "moderate"
                },
                {
                  source: "document",
                  where: {
                    or: [
                      { href_matches: "*?action=schedule-visit" },
                      { href_matches: "*?action=download-brochure" }
                    ]
                  },
                  eagerness: "immediate"
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
                "@id": "https://joyville-homes.com/#website",
                "url": "https://joyville-homes.com",
                "name": "Joyville Homes Pune | Shapoorji Pallonji",
                "publisher": { "@id": "https://joyville-homes.com/#organization" },
                "inLanguage": "en-IN",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://joyville-homes.com/projects?search={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "RealEstateAgent",
                "@id": "https://joyville-homes.com/#organization",
                "name": "Shapoorji Pallonji Real Estate Pune",
                "url": "https://joyville-homes.com",
                "logo": "https://joyville-homes.com/logo.png",
                "image": "https://joyville-homes.com/og-image.jpg",
                "legalName": ENTITIES.DEVELOPER.legalName,
                "foundingDate": ENTITIES.DEVELOPER.foundingDate,
                "description": "Official Shapoorji Pallonji Joyville Homes Pune platform. Providing premium 1, 2 & 3 BHK residences across Hinjewadi, Hadapsar, and Bavdhan.",
                "telephone": "+912067210000",
                "sameAs": ENTITIES.DEVELOPER.sameAs,
                "knowsAbout": [
                  "Pune Real Estate Market",
                  "Mivan Technology Construction",
                  "NRI Property Investment India"
                ],
                "memberOf": [
                  { "@type": "Organization", "name": "CREDAI Pune Metro", "url": "https://credaipune.org/" }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "2450"
                }
              },
              {
                "@type": "AnalysisNewsArticle",
                "@id": "https://joyville-homes.com/#analysis-hub",
                "headline": "Pune Real Estate Market Intelligence and ROI Forecast 2026",
                "author": experts.map(e => ({ "@type": "Person", "name": e.name })),
                "publisher": { "@id": "https://joyville-homes.com/#organization" },
                "datePublished": "2024-01-01",
                "dateModified": new Date().toISOString().split('T')[0]
              }
            ]
          })
        }} />
        <noscript>
          <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
            <h1>Joyville Homes Pune by Shapoorji Pallonji</h1>
            <p>Official Joyville Pune platform. Explore premium 2 &amp; 3 BHK flats across Hinjewadi, Hadapsar &amp; Bavdhan.</p>
          </div>
        </noscript>
        <ClientWrapper>
          <MarketTicker />
          <DemandPulse />
          <FloatingWhatsApp />
          <div className="min-h-screen flex flex-col relative text-foreground">
            <Navigation />
            <PageTransition>{children}</PageTransition>
          </div>
          <SEOFooter />
          <SovereignExitIntent />
          <AIConcierge />
          <CookieConsent />
        </ClientWrapper>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
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
