import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SEOFooter from "@/components/SEOFooter";
import { GoogleAnalytics } from '@next/third-parties/google';
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
    canonical: "https://www.joyville-homes.com",
  },
  verification: {
    google: "", // User to provide verification string
  },
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
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-white`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://www.joyville-homes.com/#organization",
                "name": "Joyville Homes by Shapoorji Pallonji",
                "alternateName": "Shapoorji Pallonji Real Estate",
                "url": "https://www.joyville-homes.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.joyville-homes.com/logo.png"
                },
                "description": "Official Joyville Pune — 9 premium residential projects across Hinjewadi, Hadapsar & Bavdhan. 150+ years of Shapoorji Pallonji engineering legacy.",
                "foundingDate": "1865",
                "sameAs": [
                  "https://www.facebook.com/ShapoorjiPallonjiRealEstate/",
                  "https://www.linkedin.com/company/shapoorji-pallonji-real-estate/",
                  "https://www.instagram.com/shapoorjipallonjirealestate/",
                  "https://www.joyvillehomes.com"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-20-67210000",
                  "contactType": "sales",
                  "areaServed": "Pune",
                  "availableLanguage": ["English", "Hindi", "Marathi"]
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
              }
            ]
          })
        }} />
        <div className="min-h-screen flex flex-col relative text-foreground">
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <MobileStickyCTA />
          <FloatingWhatsApp />
        </div>
        <SEOFooter />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
      </body>
    </html>
  );
}
