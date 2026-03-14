import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import TechnicalSheet from '@/components/TechnicalSheet';

// Define the supported SEO Slugs based on our strategy matrix
const siteUrl = 'https://joyville-homes.com';

export const SEO_ROUTES = [
    // Existing high-volume locational pages
    {
        slug: '2-bhk-flats-in-hinjewadi',
        title: 'Premium 2 BHK Flats in Hinjewadi Phase 1 | Shapoorji Pallonji Joyville',
        description: 'Explore the best 2 BHK luxury flats in Hinjewadi Phase 1 by Shapoorji Pallonji. RERA approved, smart home apartments near Rajiv Gandhi Infotech Park. Starting ₹85 Lakhs.',
        h1: 'Premium 2 BHK Flats in Hinjewadi Phase 1',
        keywords: ['2 BHK flats in Hinjewadi', 'buy 2 BHK Hinjewadi Phase 1', 'Joyville Hinjewadi 2 BHK price', 'RERA approved 2 BHK Hinjewadi', 'flats near Rajiv Gandhi Infotech Park', 'walk to work apartments Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '2' }
    },
    {
        slug: '3-bhk-luxury-apartments-pune-west',
        title: '3 BHK Luxury Apartments in Pune West — Hinjewadi & Bavdhan | Shapoorji Pallonji',
        description: 'Discover spacious 3 BHK luxury residences in Pune West (Hinjewadi Phase 1, Bavdhan). Premium townships with Italian marble, concierge services. 150-year Shapoorji Pallonji legacy.',
        h1: '3 BHK Luxury Apartments in Pune West',
        keywords: ['3 BHK luxury apartments Pune West', '3 BHK Bavdhan', '3 BHK luxury flats Hinjewadi', 'premium 3 BHK Pune', 'penthouse Hinjewadi', 'ultra luxury apartments Pune'],
        filters: { locationMatch: 'Pune|Hinjewadi|Bavdhan', typeMatch: '3' }
    },
    {
        slug: 'townships-near-magarpatta-city',
        title: 'Township Projects near Magarpatta City & SP Infocity | Joyville Hadapsar',
        description: 'Find premium township flats near Magarpatta City and SP Infocity in East Pune. 21-acre Joyville Hadapsar Annexe with 60+ amenities. Ready to move options from ₹65 Lakhs.',
        h1: 'Premium Township Projects Near Magarpatta City',
        keywords: ['flats near Magarpatta City', 'townships East Pune', 'Joyville Hadapsar Annexe', 'flats near SP Infocity', 'ready to move flats Hadapsar', 'Shewalewadi property'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'na-bungalow-plots-near-purandar-airport',
        title: 'NA Bungalow Plots Near Purandar Airport — Shapoorji Treetopia Pune',
        description: 'Invest in RERA approved NA Bungalow Plots near the upcoming Purandar Airport in Pune. Shapoorji Pallonji Treetopia plots from ₹84 Lakhs. Gated community with biophilic landscapes.',
        h1: 'Premium NA Bungalow Plots Near Upcoming Purandar Airport',
        keywords: ['NA bungalow plots Pune', 'plots near Purandar Airport', 'Shapoorji Treetopia price', 'villa plots Pune', 'land investment Pune airport', 'RERA approved plots Pune'],
        filters: { locationMatch: 'Jadhavwadi|Purandar', typeMatch: 'Plots' }
    },

    // NEW Launch Focus
    {
        slug: 'joyville-vyomora-hinjewadi',
        title: 'Joyville Vyomora Hinjewadi Phase 1 | Brand New Launch by Shapoorji Pallonji',
        description: 'Experience luxury at Joyville Vyomora, Hinjewadi Phase 1. 2 & 3 BHK residences and 3 BHK duplexes. Premium IT lifeline location. Starting ₹84.99 Lakhs. RERA registered.',
        h1: 'Joyville Vyomora — Brand New Launch in Hinjewadi Phase 1',
        keywords: ['joyville vyomora hinjewadi', 'joyville vyomora price', 'joyville vyomora floor plan', 'new launch hinjewadi', '3 bhk duplex hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Vyomora' }
    },

    // Typology pages
    {
        slug: '3-bhk-flats-in-hinjewadi',
        title: '3 BHK Flats in Hinjewadi Phase 1 | Joyville Sensorium by Shapoorji Pallonji',
        description: 'Explore spacious 3 BHK apartments in Hinjewadi Phase 1 at Joyville Sensorium (979 sq.ft.). Smart home ready, edge-certified green building. RERA approved.',
        h1: '3 BHK Flats in Hinjewadi Phase 1',
        keywords: ['3 BHK flats in Hinjewadi', '3 BHK Hinjewadi Phase 1', '3 BHK apartments Hinjewadi', 'Joyville Sensorium 3 BHK', 'flat near Infosys Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '3' }
    },
    {
        slug: '1-bhk-flats-in-hadapsar',
        title: '1 BHK Flats in Hadapsar Pune — Starting ₹65 Lakhs | Joyville Hadapsar Annexe',
        description: 'Affordable 1 BHK flats in Hadapsar, Pune starting just ₹65 Lakhs. Ready to move options at Joyville Hadapsar Annexe. 21-acre township near Magarpatta City. 60+ amenities.',
        h1: 'Affordable 1 BHK Flats in Hadapsar, Pune',
        keywords: ['1 BHK flats Hadapsar', '1 BHK Hadapsar under 70 lakhs', 'affordable flats Pune East', 'ready to move 1 BHK Hadapsar', 'Joyville Hadapsar 1 BHK'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '1' }
    },
    {
        slug: 'flats-in-bavdhan-pune',
        title: 'Premium Flats in Bavdhan, Pune — Vanaha Township by Shapoorji Pallonji',
        description: 'Explore luxury flats and apartments in Bavdhan, Pune. Vanaha — a 1,000-acre township with golf course views, valley vistas, and world-class amenities. Shapoorji Pallonji.',
        h1: 'Premium Flats in Bavdhan, Pune',
        keywords: ['flats in Bavdhan Pune', '2 BHK Bavdhan', '3 BHK Bavdhan', 'Vanaha Bavdhan', 'golf course apartments Pune', 'township Bavdhan Pune', 'luxury flats Bavdhan'],
        filters: { locationMatch: 'Bavdhan', typeMatch: '' }
    },
    {
        slug: 'ready-to-move-flats-hadapsar',
        title: 'Ready to Move Flats in Hadapsar Pune — Immediate Possession | Joyville',
        description: 'Move in immediately. Ready to move 1, 2 & 3 BHK flats at Joyville Hadapsar Annexe by Shapoorji Pallonji. 21-acre township near Magarpatta. Starting ₹65 Lakhs.',
        h1: 'Ready to Move Flats in Hadapsar, Pune',
        keywords: ['ready to move flats Hadapsar', 'ready possession flats Pune East', 'immediate possession Hadapsar', 'Joyville Hadapsar ready to move', 'move in ready flats Pune'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },

    // High-Intent Intent Clusters
    {
        slug: 'ready-possession-hinjewadi',
        title: 'Ready Possession Flats in Hinjewadi Phase 1 — Move In 2026 | Joyville',
        description: 'Skip the construction wait. Explore ready possession 2 & 3 BHK luxury flats in Hinjewadi Phase 1 by Shapoorji Pallonji. Smart home residences near Wipro Circle. Starting ₹1.10 Cr.',
        h1: 'Ready Possession Flats in Hinjewadi Phase 1',
        keywords: ['ready possession flats Hinjewadi', 'move in ready Hinjewadi', 'ready to move Joyville Hinjewadi', 'immediate possession Hinjewadi Phase 1'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: '3-bhk-luxury-flats-hadapsar-nri-special',
        title: 'Investment Grade 3 BHK Luxury Flats in Hadapsar — NRI Preferred | Skyluxe',
        description: 'Premium 3 BHK residences and penthouses in Hadapsar. High rental yield (5.2%+) for NRI investors. Italian marble flooring, private concierge, and panoramic views. RERA approved.',
        h1: 'Luxury 3 BHK Residences in Hadapsar — NRI Selection',
        keywords: ['3 BHK luxury Hadapsar', 'NRI investment Pune', 'Skyluxe Hadapsar 3 BHK price', 'penthouses Hadapsar', 'high rental yield Hadapsar'],
        filters: { locationMatch: 'Hadapsar|Shewalewadi', typeMatch: '3' }
    },
    {
        slug: 'under-1-crore-flats-hinjewadi-phase-1',
        title: 'Top Flats Under 1 Crore in Hinjewadi Phase 1 | Joyville Pune',
        description: 'Invest in premium 2 BHK flats under 1 crore in Hinjewadi Phase 1. Joyville Vyomora launch price starting ₹84.99 Lakhs. Best amenities and tech-lifeline connectivity.',
        h1: 'Premium Flats Under 1 Crore in Hinjewadi Phase 1',
        keywords: ['flats under 1 crore Hinjewadi', '2 BHK under 1 crore Hinjewadi', 'budget luxury Hinjewadi', 'Joyville Vyomora price under 1 cr'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'investment-flats-near-eon-it-park',
        title: 'Best Investment Flats Near EON IT Park & Kharadi | Joyville Hadapsar',
        description: 'High-growth investment property near EON IT Park and World Trade Center. 1, 2 & 3 BHK flats at Joyville Hadapsar Annexe. Projected 12% annual appreciation. From ₹65 Lakhs.',
        h1: 'Lucrative Investment Flats Near EON IT Park',
        keywords: ['investment near EON IT Park', 'property near WTC Pune', 'Joyville Hadapsar investment', 'Kharadi annexe real estate'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    // Comparison landing pages
    {
        slug: 'joyville-vs-kolte-patil-life-republic-hinjewadi',
        title: 'Joyville Sensorium vs Kolte Patil Life Republic — Hinjewadi Comparison 2025',
        description: 'An objective comparison of Joyville Sensorium by Shapoorji Pallonji and Kolte Patil Life Republic in Hinjewadi. Compare price, amenities, construction quality, RERA status, and ROI potential.',
        h1: 'Joyville Sensorium vs Kolte Patil Life Republic — Which Is Better?',
        keywords: ['Joyville vs Kolte Patil Life Republic', 'Joyville vs Life Republic', 'Hinjewadi project comparison', 'best project Hinjewadi 2025', 'Shapoorji Pallonji vs Kolte Patil'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-godrej-hinjewadi',
        title: 'Joyville Sensorium vs Godrej Evergreen Square — Hinjewadi Comparison 2025',
        description: 'Detailed comparison of Joyville Sensorium (Shapoorji Pallonji) vs Godrej Evergreen Square in Hinjewadi. Price per sq.ft., amenities, green certifications, and investment returns compared.',
        h1: 'Joyville Sensorium vs Godrej Evergreen Square — Complete Comparison',
        keywords: ['Joyville vs Godrej Hinjewadi', 'Joyville Sensorium vs Godrej', 'Hinjewadi apartments comparison', 'Shapoorji Pallonji vs Godrej Properties', 'best apartments Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-vtp-bellissimo-hinjewadi',
        title: 'Joyville Sensorium vs VTP Bellissimo — Hinjewadi Comparison 2026',
        description: 'Detailed head-to-head comparison of Joyville Sensorium (Shapoorji Pallonji) vs VTP Bellissimo in Hinjewadi. Compare price, amenities, construction quality, RERA, and investment ROI.',
        h1: 'Joyville Sensorium vs VTP Bellissimo — Which Is Better in 2026?',
        keywords: ['Joyville vs VTP Bellissimo', 'Joyville Sensorium vs VTP', 'Hinjewadi apartments comparison 2026', 'Shapoorji vs VTP Pune', 'best project Hinjewadi 2026'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-amanora-hadapsar',
        title: 'Joyville Hadapsar vs Amanora Trendsetter — East Pune Comparison 2026',
        description: 'Comprehensive comparison of Joyville Hadapsar Annexe (Shapoorji Pallonji) vs Amanora Trendsetter in Hadapsar. Price, township size, amenities, connectivity, and appreciation potential.',
        h1: 'Joyville Hadapsar vs Amanora Trendsetter — Complete Comparison',
        keywords: ['Joyville vs Amanora', 'Joyville Hadapsar vs Amanora Trendsetter', 'Hadapsar project comparison 2026', 'best township Hadapsar', 'Shapoorji vs Amanora'],
        filters: { locationMatch: 'Hadapsar|Shewalewadi', typeMatch: '' }
    },

    // High-Intent Intent Clusters
    {
        slug: 'joyville-sensorium-price-list',
        title: 'Joyville Sensorium Price List & Payment Plan | Shapoorji Pallonji Hinjewadi',
        description: 'Get the latest Joyville Sensorium price list, cost sheet, and flexible payment plans. 2 & 3 BHK luxury flats in Hinjewadi Phase 1 starting ₹1.10 Cr. Download brochure now.',
        h1: 'Joyville Sensorium Price List & Cost Sheet',
        keywords: ['joyville sensorium price', 'joyville sensorium cost sheet', 'joyville sensorium payment plan', 'joyville sensorium 2 bhk price', 'joyville sensorium 3 bhk price'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Sensorium' }
    },
    {
        slug: 'joyville-hadapsar-annexe-price',
        title: 'Joyville Hadapsar Annexe Price List — Starting ₹65 Lakhs | Shapoorji Pallonji',
        description: 'Check the official price list for Joyville Hadapsar Annexe. 1, 2 & 3 BHK premium flats in East Pune. Easy payment schemes and bank offer details available.',
        h1: 'Joyville Hadapsar Annexe Price & Payment Plans',
        keywords: ['joyville hadapsar price', 'joyville hadapsar annexe cost', 'joyville hadapsar 1 bhk price', 'joyville hadapsar 2 bhk price', 'joyville hadapsar 3 bhk price'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: 'Hadapsar' }
    },
    {
        slug: 'joyville-vyomora-price-list',
        title: 'Joyville Vyomora Price List & Launch Offers | Hinjewadi Phase 1',
        description: 'Exclusive new launch prices for Joyville Vyomora. 2 & 3 BHK duplex apartments in Hinjewadi Phase 1 starting ₹84.99 Lakhs. Limited period early bird offers.',
        h1: 'Joyville Vyomora Pricing & Launch Benefits',
        keywords: ['joyville vyomora price', 'joyville vyomora cost sheet', 'joyville vyomora launch price', 'joyville vyomora 2 bhk price'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Vyomora' }
    },
    {
        slug: 'joyville-pune-brochure-download',
        title: 'Download Joyville Pune Project Brochures & Floor Plans | Shapoorji Pallonji',
        description: 'Download the latest PDF brochures for Joyville Sensorium, Hadapsar Annexe, Celestia, and Vanaha. Get detailed floor plans, master plans, and amenity lists.',
        h1: 'Download Joyville Pune Official Brochures',
        keywords: ['joyville home brochure', 'joyville sensorium brochure pdf', 'joyville hadapsar brochure', 'joyville floor plans pdf', 'shapoorji pallonji pune brochure'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'joyville-sensorium-possession-date',
        title: 'Joyville Sensorium Possession Date & Construction Update | Hinjewadi',
        description: 'Stay updated with Joyville Sensorium construction status and official possession dates. Latest RERA updates and site photos for Hinjewadi luxury apartments.',
        h1: 'Joyville Sensorium Construction Status & Possession',
        keywords: ['joyville sensorium possession', 'joyville sensorium construction update', 'joyville sensorium status', 'joyville sensorium completion date'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Sensorium' }
    },
    {
        slug: 'joyville-hadapsar-annexe-possession',
        title: 'Joyville Hadapsar Annexe Possession & Ready-to-Move Units',
        description: 'Check possession dates for different phases of Joyville Hadapsar Annexe. Ready to move 1, 2 & 3 BHK apartments available near Magarpatta City.',
        h1: 'Joyville Hadapsar Annexe Possession Updates',
        keywords: ['joyville hadapsar possession', 'joyville hadapsar ready to move', 'joyville hadapsar phase 1 possession', 'joyville hadapsar status'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: 'Hadapsar' }
    },
    {
        slug: 'flats-near-sp-infocity-pune',
        title: 'Premium Flats Near SP Infocity Phursungi | Joyville Hadapsar Annexe',
        description: 'Find premium 1, 2 & 3 BHK flats near SP Infocity Phursungi. 21-acre Joyville Hadapsar Annexe township by Shapoorji Pallonji. Walk to work from ₹65 Lakhs.',
        h1: 'Premium Flats Near SP Infocity, Phursungi',
        keywords: ['flats near SP Infocity', 'SP Infocity Phursungi residential', 'Joyville Hadapsar SP Infocity', 'apartments near SP Infocity Pune'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'flats-near-magarpatta-pune',
        title: 'Flats Near Magarpatta City Pune — Walk to IT Park | Joyville by Shapoorji Pallonji',
        description: 'Affordable & premium flats near Magarpatta City, Pune. 1, 2 & 3 BHK options at Joyville Hadapsar Annexe. 21-acre RERA township, 4.5 km from Magarpatta. From ₹65 Lakhs.',
        h1: 'Flats Near Magarpatta City, Pune — 2026',
        keywords: ['flats near Magarpatta City', 'apartments near Magarpatta Pune', 'Magarpatta residential projects', 'flats near Magarpatta IT Park', 'Hadapsar flats near Magarpatta 2026', 'property near Magarpatta City'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'nri-investment-flats-pune',
        title: 'NRI Investment Flats in Pune 2026 — High Rental Yield | Shapoorji Pallonji',
        description: 'Best NRI investment properties in Pune 2026. 4.5-5.5% rental yield in Hinjewadi. RERA approved Shapoorji Pallonji projects. Repatriation-friendly. Complete NRI buyer guide.',
        h1: 'Best NRI Investment Flats in Pune — 2026 Guide',
        keywords: ['NRI investment Pune', 'NRI flats Pune', 'NRI property investment India 2026', 'rental yield Pune NRI', 'best NRI investment India', 'RERA NRI benefits', 'Hinjewadi NRI flats', 'rupee depreciation property advantage'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'rera-approved-flats-pune',
        title: 'RERA Approved Flats in Pune 2026 — Verified & Safe | Shapoorji Pallonji Joyville',
        description: 'Browse MahaRERA approved flats in Pune by Shapoorji Pallonji. All Joyville & Vanaha projects are RERA registered with escrow protection. 9 verified projects from ₹65 Lakhs.',
        h1: 'MahaRERA Approved Flats in Pune — 2026',
        keywords: ['RERA approved flats Pune', 'MahaRERA projects Pune', 'RERA registered flats Pune', 'verified projects Pune 2026', 'RERA safe investment Pune', 'MahaRERA approved Hinjewadi', 'RERA flats Hadapsar'],
        filters: { locationMatch: '', typeMatch: '' }
    },

    // Cluster: Locality - Specific High-Intent
    {
        slug: 'flats-near-hinjewadi-it-park',
        title: 'Luxury Flats Near Hinjewadi IT Park (Phase 1, 2) | Shapoorji Pallonji',
        description: 'Premium residences near Rajiv Gandhi Infotech Park. Walk-to-work 2 & 3 BHK apartments at Joyville Sensorium. Starting ₹1.10 Cr. EDGE certified.',
        h1: 'Luxury Flats Near Hinjewadi IT Park',
        keywords: ['flats near Hinjewadi IT Park', 'apartments near Rajiv Gandhi Infotech Park', 'Joyville Hinjewadi IT Park', 'flats near Wipro Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'flats-near-eon-it-park-kharadi',
        title: 'Premium Flats Near EON IT Park Kharadi — Joyville Hadapsar Annexe',
        description: 'Explore premium flats near EON IT Park Kharadi. 21-acre Joyville Hadapsar Annexe township just a short drive away. World-class amenities. Starting ₹65 Lakhs.',
        h1: 'Premium Flats Near EON IT Park, Kharadi',
        keywords: ['flats near EON IT Park', 'apartments near Kharadi IT Park', 'Joyville Hadapsar Kharadi', 'flats near World Trade Center Pune'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'apartments-near-magarpatta-city-hadapsar',
        title: 'Luxury Apartments Near Magarpatta City Hadapsar | Shapoorji Pallonji',
        description: 'Spacious 2 & 3 BHK luxury apartments near Magarpatta City. Explore Joyville Hadapsar Annexe & Celestia. Premium lifestyle near Pune\'s IT hubs.',
        h1: 'Luxury Apartments Near Magarpatta City, Hadapsar',
        keywords: ['apartments near Magarpatta City', 'luxury flats Hadapsar', 'Joyville Hadapsar apartments', 'flats near Noble Hospital'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'residential-projects-near-hinjewadi-phase-1',
        title: 'Residential Projects Near Hinjewadi Phase 1 | Shapoorji Pallonji Joyville',
        description: 'Explore the best residential projects near Hinjewadi Phase 1. Joyville Sensorium & Vyomora by Shapoorji Pallonji. Smart homes with 60+ amenities.',
        h1: 'Top Residential Projects Near Hinjewadi Phase 1',
        keywords: ['residential projects Hinjewadi Phase 1', 'flats near Infosys Hinjewadi', 'Joyville Sensorium Hinjewadi', 'Hinjenwadi Phase 1 apartments'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'affordable-flats-in-shewalewadi-hadapsar',
        title: 'Affordable Flats in Shewalewadi Hadapsar — Starting ₹65 Lakhs | Joyville',
        description: 'Looking for affordable housing in East Pune? Explore Joyville Hadapsar Annexe in Shewalewadi. 1, 2 & 3 BHK premium flats with massive open spaces.',
        h1: 'Affordable Flats in Shewalewadi, Hadapsar',
        keywords: ['affordable flats Shewalewadi', 'Joyville Hadapsar Shewalewadi', 'flats in Shewalewadi Pune', 'Hadapsar affordable housing'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'flats-near-pune-metro-line-3',
        title: 'Flats Near Pune Metro Line 3 (Hinjewadi to Shivajinagar) | Joyville Pune',
        description: 'Invest in flats near the upcoming Pune Metro Line 3. Excellent connectivity for Hinjewadi professionals. Projects by Shapoorji Pallonji. RERA approved.',
        h1: 'Premium Flats Near Pune Metro Line 3',
        keywords: ['flats near Pune Metro', 'Metro Line 3 residential', 'Hinjewadi Metro flats', 'property near Metro station Pune'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },

    // Cluster: Budget & Intent
    {
        slug: 'under-1-crore-flats-pune',
        title: 'Flats Under 1 Crore in Pune — Hinjewadi & Hadapsar | Joyville Homes',
        description: 'Premium quality life under 1 crore. Explore 2 BHK flats in Hinjewadi and Hadapsar by Shapoorji Pallonji. RERA approved gated communities.',
        h1: 'Best Flats Under 1 Crore in Pune',
        keywords: ['flats under 1 crore Pune', '2 BHK under 1 crore Hinjewadi', 'apartments under 1 crore Hadapsar', 'budget luxury Pune'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'investment-property-pune-2026',
        title: 'Best Investment Property in Pune 2026 — High ROI | Shapoorji Pallonji',
        description: 'Top real estate investment opportunities in Pune for 2026. Focus on Hinjewadi, Hadapsar and Purandar growth corridors. Trusted 150-year legacy.',
        h1: 'Top Investment Property in Pune for 2026',
        keywords: ['investment property Pune', 'real estate investment 2026', 'best ROI Pune property', 'Shapoorji investment Pune'],
        filters: { locationMatch: '', typeMatch: '' }
    },

    // Cluster: Status & Features
    {
        slug: 'ready-to-move-flats-in-hadapsar',
        title: 'Ready to Move Flats in Hadapsar Pune — OC Received | Joyville Annexe',
        description: 'Move in today. Ready to move 1, 2 & 3 BHK apartments at Joyville Hadapsar Annexe. OC received for multiple towers. Starting ₹65 Lakhs onwards.',
        h1: 'Ready to Move Flats in Hadapsar, Pune',
        keywords: ['ready to move flats Hadapsar', 'Joyville Hadapsar ready to move', 'OC received Hadapsar', 'immediate possession Pune East'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'ready-possession-flats-pune-2026',
        title: 'Ready Possession Flats in Pune 2026 — Move In Today | Joyville',
        description: 'Skip the wait. Explore ready possession 1, 2 & 3 BHK flats at Joyville Hadapsar Annexe and other Shapoorji Pallonji projects in Pune. OC received.',
        h1: 'Ready Possession Flats in Pune — 2026',
        keywords: ['ready possession flats Pune', 'immediate possession flats Hadapsar', 'OC received flats Pune', 'move-in ready Joyville'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'new-launch-projects-pune-2025',
        title: 'New Launch Residential Projects in Pune 2025 | Shapoorji Pallonji',
        description: 'be the first to invest. Explore new launch projects in Hinjewadi, Hadapsar and Bavdhan for 2025. Joyville Vyomora and Celestia. RERA approved.',
        h1: 'Upcoming New Launch Projects in Pune — 2025',
        keywords: ['new launch projects Pune 2025', 'upcoming projects Hinjewadi 2025', 'Shapoorji Pallonji new launch', 'Joyville Vyomora launch'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'new-launch-projects-pune-2026',
        title: 'New Launch Residential Projects in Pune 2026 | Shapoorji Pallonji',
        description: 'Future-proof your investment. Explore upcoming residential launches in Pune for 2026. Premium townships in Hinjewadi and Hadapsar growth corridors.',
        h1: 'Upcoming New Launch Projects in Pune — 2026',
        keywords: ['new launch projects Pune 2026', 'investment projects Pune 2026', 'Joyville Skyluxe Edition', 'future projects Shapoorji Pune'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'smart-home-apartments-pune',
        title: 'Smart Home Apartments in Pune — Joyville Sensorium Hinjewadi',
        description: 'Experience futuristic living. Smart home enabled apartments in Hinjewadi Phase 1 at Joyville Sensorium. Advanced safety and automation features.',
        h1: 'Premium Smart Home Apartments in Pune',
        keywords: ['smart home apartments Pune', 'home automation Hinjewadi', 'Joyville Sensorium smart home', 'hi-tech apartments Pune'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: 'Sensorium' }
    },
    {
        slug: 'gated-community-pune-2026',
        title: 'Gated Community Flats in Pune 2026 — Safe & Secure | Joyville Homes',
        description: 'Elite gated communities in Hinjewadi, Hadapsar and Bavdhan. 5-tier security, 60+ amenities, and massive open spaces. Shapoorji Pallonji quality.',
        h1: 'Top Gated Community Flats in Pune — 2026',
        keywords: ['gated community Pune', 'secure residences Hinjewadi', 'township projects Hadapsar', 'safe flats Pune families'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'shapoorji-pallonji-projects-pune',
        title: 'All Shapoorji Pallonji Projects in Pune | Master Portfolio 2026',
        description: 'Explore the complete master portfolio of Shapoorji Pallonji Real Estate in Pune. Spanning 9 premium projects across Hinjewadi, Hadapsar, Bavdhan & more.',
        h1: 'Master Portfolio: Shapoorji Pallonji Projects in Pune',
        keywords: ['Shapoorji Pallonji Pune projects', 'Joyville Pune projects', 'Vanaha Bavdhan', 'Shapoorji Treetopia'],
        filters: { locationMatch: '', typeMatch: '' }
    },

    // Cluster: Competitor Comparisons
    {
        slug: 'joyville-vs-godrej-properties-pune',
        title: 'Joyville vs Godrej Properties — Best Real Estate Developer in Pune?',
        description: 'An objective comparison between Shapoorji Pallonji (Joyville) and Godrej Properties in the Pune market. Legacy, construction quality, and ROI compared.',
        h1: 'Joyville vs Godrej Properties — Detailed Comparison',
        keywords: ['Joyville vs Godrej', 'Shapoorji vs Godrej Pune', 'best developer Pune', 'construction quality comparison'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-pride-purple-pune',
        title: 'Joyville Hadapsar vs Pride Purple — East Pune Project Comparison',
        description: 'Detailed head-to-head comparison between Joyville Hadapsar Annexe and Pride Purple projects in East Pune. Compare price, scale, and amenities.',
        h1: 'Joyville vs Pride Purple — Which Is Better?',
        keywords: ['Joyville vs Pride Purple', 'Hadapsar project comparison', 'Pune East real estate', 'Shapoorji vs Pride Purple'],
        filters: { locationMatch: 'Shewalewadi|Hadapsar', typeMatch: '' }
    },
    {
        slug: 'joyville-vs-gera-world-of-joy',
        title: 'Joyville vs Gera World of Joy — Best Family Projects in Pune',
        description: 'Compare Joyville Hadapsar and Hinjewadi with Gera World of Joy. Focus on child-friendly amenities, construction quality and community living.',
        h1: 'Joyville vs Gera World of Joy — Complete Comparison',
        keywords: ['Joyville vs Gera', 'Gera World of Joy comparison', 'best family flats Pune', 'Shapoorji vs Gera'],
        filters: { locationMatch: '', typeMatch: '' }
    },
    // Amenity-First Clusters (Social-Moment Silos)
    {
        slug: 'gated-communities-with-ev-charging-hinjewadi',
        title: 'Gated Communities with EV Charging in Hinjewadi Phase 1 | Joyville',
        description: 'Future-proof your home. Explore premium gated communities in Hinjewadi Phase 1 with dedicated EV charging stations, sustainable infrastructure, and EDGE certification.',
        h1: 'EV Charging Ready Gated Communities in Hinjewadi',
        keywords: ['EV charging flats Hinjewadi', 'electric vehicle charging apartments Pune', 'Joyville Hinjewadi EV charging', 'sustainable projects Hinjewadi'],
        filters: { locationMatch: 'Hinjewadi', typeMatch: '' }
    },
    {
        slug: 'apartments-with-75-percent-open-space-pune',
        title: 'Apartments with 75% Open Green Space in Pune | Joyville Sensorium',
        description: 'Breathe easy. Discover luxury apartments in Pune (Hinjewadi & Hadapsar) offering 75% to 80% open green spaces, biophilic gardens, and 1.8km walking boulevards.',
        h1: 'Premium Apartments with 75%+ Open Spaces in Pune',
        keywords: ['apartments with open space Pune', '75 percent open space flats Hinjewadi', 'biophilic homes Pune', 'Joyville Sensorium open space'],
        filters: { locationMatch: 'Hinjewadi|Hadapsar', typeMatch: '' }
    }
];

export async function generateStaticParams() {
    return SEO_ROUTES.map((route) => ({
        seoSlug: route.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ seoSlug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        return { title: 'Properties | Joyville Pune' };
    }

    return {
        title: routeData.title,
        description: routeData.description,
        keywords: routeData.keywords,
        openGraph: {
            title: routeData.title,
            description: routeData.description,
            url: `${siteUrl}/properties/${routeData.slug}`,
            siteName: 'Joyville Homes Pune | Shapoorji Pallonji',
            images: [
                {
                    url: `${siteUrl}/images/desktop-poster.webp`,
                    width: 1200,
                    height: 630,
                    alt: routeData.title,
                },
            ],
            locale: 'en_IN',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: routeData.title,
            description: routeData.description,
            images: [`${siteUrl}/images/desktop-poster.webp`],
        },
        alternates: {
            canonical: `${siteUrl}/properties/${routeData.slug}`
        }
    };
}

// FAQ data for programmatic pages — enables Google rich snippets
const PAGE_FAQS: Record<string, { q: string; a: string }[]> = {
    'hinjewadi': [
        { q: 'What is the starting price of flats in Hinjewadi Phase 1?', a: 'Premium 2 BHK flats in Hinjewadi Phase 1 by Shapoorji Pallonji start from ₹1.10 Cr. 3 BHK options are available from ₹1.30 Cr at Joyville Sensorium.' },
        { q: 'Are Joyville Hinjewadi projects RERA approved?', a: 'Yes, all Joyville projects in Hinjewadi are MahaRERA registered. Joyville Sensorium RERA: P52100053806.' },
        { q: 'How far are Joyville Hinjewadi projects from IT parks?', a: 'Joyville Sensorium is located in Hinjewadi Phase 1, just 2-5 minutes from Infosys, Wipro, TCS, and Cognizant campuses — offering true walk-to-work convenience.' },
        { q: 'What is the expected rental yield in Hinjewadi?', a: 'Premium apartments in Hinjewadi Phase 1 command 4.5-5.5% rental yield, significantly higher than the Mumbai average of 2.5-3%.' },
    ],
    'hadapsar': [
        { q: 'What is the price range for flats in Hadapsar?', a: 'Joyville Hadapsar Annexe offers 1 BHK from ₹65 Lakhs, 2 BHK from ₹80 Lakhs. Luxury 3 BHK at Skyluxe Edition starts from ₹1.40 Cr.' },
        { q: 'Are there ready-to-move-in flats in Hadapsar?', a: 'Yes, Joyville Hadapsar Annexe has ready-to-move-in options with immediate possession. OC received for select towers.' },
        { q: 'How close are Joyville Hadapsar projects to Magarpatta City?', a: 'Joyville Hadapsar Annexe is approximately 4.5 km from Magarpatta City and 2.5 km from SP Infocity Phursungi.' },
        { q: 'What amenities does Joyville Hadapsar offer?', a: 'Joyville Hadapsar Annexe spans 21 acres with 60+ amenities including a 35,000 sq.ft. clubhouse, infinity pool, co-working spaces, jogging track, and 4 mini club facilities.' },
    ],
    'bavdhan': [
        { q: 'What makes Bavdhan special for real estate investment?', a: 'Bavdhan offers hill views, proximity to NDA hills, Pashan Lake, and the Mumbai-Pune Expressway. Shapoorji Pallonji\'s 1,000-acre Vanaha township makes it Pune\'s largest integrated community.' },
        { q: 'What is Vanaha Golfland?', a: 'Vanaha Golfland is a premium residential project by Shapoorji Pallonji in Bavdhan offering golf course views, hill vistas, and world-class clubhouse amenities within the 1,000-acre Vanaha township.' },
        { q: 'What is the price appreciation in Bavdhan?', a: 'Bavdhan has recorded 13.18% year-on-year appreciation, making it the fastest-growing luxury micro-market in Pune. Limited land availability is driving scarcity-led price growth.' },
    ],
    'vs': [
        { q: 'Why choose Joyville over competitors in Pune?', a: 'Joyville by Shapoorji Pallonji offers a 150-year developer legacy, EDGE-certified green buildings, 60+ world-class amenities, and construction quality that built the Indian Parliament — advantages no competitor can match.' },
        { q: 'Is Joyville Sensorium better than other Hinjewadi projects?', a: 'Joyville Sensorium stands out with its 10.5-acre scale, 1.8km walking boulevard, EDGE certification, smart home integration, and 75% open space — metrics that exceed most competitors in Hinjewadi Phase 1.' },
        { q: 'What ROI can I expect from Joyville projects?', a: 'Joyville Hinjewadi projects offer 4.5-5.5% rental yield with 8-12% annual capital appreciation. Hadapsar projects offer 3.5-4.5% yield with steady 8.5% appreciation.' },
    ],
    'general': [
        { q: 'Who is the developer of Joyville Homes?', a: 'Joyville Homes is developed by Shapoorji Pallonji Real Estate, a group with 150+ years of legacy since 1865. The group has built iconic structures including the Indian Parliament and the Oberoi Hotel.' },
        { q: 'Are all Joyville projects MahaRERA registered?', a: 'Yes, every Joyville and Vanaha project by Shapoorji Pallonji is fully MahaRERA registered. RERA numbers are displayed on each project page for verification.' },
        { q: 'How do I book a site visit for Joyville projects?', a: 'You can request a complimentary site visit by filling the enquiry form on any project page, or by contacting our sales team. Cab pickup from Pune station/airport is available for outstation buyers.' },
        { q: 'Is Joyville a good investment for NRIs?', a: 'Yes, Joyville projects offer excellent NRI investment value with 4.5-5.5% rental yields, RERA protection, Shapoorji Pallonji brand trust, and rupee depreciation advantage for foreign currency investors.' },
        { q: 'What is the booking process for a flat at Joyville Pune?', a: 'The booking process is seamless: 1. Select your preferred unit/floor plan. 2. Submit the booking amount (EOI/Booking Payment). 3. Provide KYC documents (PAN, Aadhaar/Passport). 4. Complete the digital application. Most bookings can be completed remotely within 48 hours for NRIs.' },
        { q: 'Are home loans available from major banks for Joyville?', a: 'Yes, all Joyville projects are pre-approved by major financial institutions including SBI, HDFC, ICICI, and Axis Bank. Competitive interest rates starting from 8.35% are available for eligible buyers.' },
        { q: 'What are the stamp duty and registration charges in Pune 2026?', a: 'Currently, the stamp duty in Maharashtra is 7% (including LBT) and registration is 1% or ₹30,000 (whichever is lower). Women buyers may be eligible for a 1% concession in stamp duty.' },
    ]
};

function getFaqsForRoute(slug: string): { q: string; a: string }[] {
    if (slug.includes('hinjewadi') && !slug.includes('-vs-')) return [...PAGE_FAQS['hinjewadi'], ...PAGE_FAQS['general']];
    if (slug.includes('hadapsar') || slug.includes('sp-infocity') || slug.includes('magarpatta')) return [...PAGE_FAQS['hadapsar'], ...PAGE_FAQS['general']];
    if (slug.includes('bavdhan')) return [...PAGE_FAQS['bavdhan'], ...PAGE_FAQS['general']];
    if (slug.includes('-vs-')) return [...PAGE_FAQS['vs'], ...PAGE_FAQS['general']];
    return PAGE_FAQS['general'];
}

export default async function ProgrammaticSEOPage({ params }: { params: Promise<{ seoSlug: string }> }) {
    const resolvedParams = await params;
    const routeData = SEO_ROUTES.find(r => r.slug === resolvedParams.seoSlug);

    if (!routeData) {
        notFound();
    }

    // Filter projects based on the programmatic route logic
    const matchedProjects = projects.filter(project => {
        const matchesLocation = routeData.filters.locationMatch ? new RegExp(routeData.filters.locationMatch, 'i').test(project.location) : true;
        const matchesType = routeData.filters.typeMatch ? new RegExp(routeData.filters.typeMatch, 'i').test(project.type) : true;
        return matchesLocation && matchesType;
    });

    const pageFaqs = getFaqsForRoute(routeData.slug);

    const speakableJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "h1",
                ".header-description"
            ]
        },
        "url": `${siteUrl}/properties/${routeData.slug}`
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": routeData.h1,
        "description": routeData.description,
        "url": `${siteUrl}/properties/${routeData.slug}`,
        "numberOfItems": matchedProjects.length,
        "about": matchedProjects.map(p => ({
            "@type": "RealEstateProject",
            "name": p.title,
            "url": `${siteUrl}/projects/${p.slug}`,
            "sameAs": p.wikidataUri
        })),
        "itemListElement": matchedProjects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "RealEstateListing",
                "name": project.title,
                "url": `${siteUrl}/projects/${project.slug}`,
                "image": project.image,
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "price": project.price,
                    "offerCount": "1",
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    };

    const faqJsonLd = pageFaqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": pageFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null;

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Properties",
                "item": `${siteUrl}/projects`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": routeData.h1,
                "item": `${siteUrl}/properties/${routeData.slug}`
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#EEF2F6] pt-32 pb-24 text-[#323334]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <header className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#1D4F9C] font-semibold block mb-4">Shapoorji Pallonji Curated Collection</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#323334] font-light mb-6">{routeData.h1}</h1>
                <p className="text-[#323334] text-lg max-w-3xl mx-auto font-light leading-relaxed header-description">
                    {routeData.description} Explore our portfolio of premium properties crafted with a 150-year legacy of trust and engineering excellence.
                </p>
                
                {/* Technical Specification Sheet for Featured Project (if strictly matched) */}
                {matchedProjects.length === 1 && matchedProjects[0].technicalSpecs && (
                    <div className="mt-12 text-left max-w-5xl mx-auto">
                        <TechnicalSheet 
                            specs={matchedProjects[0].technicalSpecs} 
                            projectName={matchedProjects[0].title}
                        />
                    </div>
                )}
            </header>

            {/* Rich Comparison Content for vs Pages */}
            {routeData.slug.includes('-vs-') && (
                <section className="max-w-5xl mx-auto px-6 mb-20">
                    <div className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm overflow-hidden shadow-lg">
                        <div className="bg-[#1D4F9C] text-[#FFFFFF] py-4 px-8">
                            <h2 className="text-xl font-serif">Head-to-Head Comparison</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-[#C5A059]/10">
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold">Parameter</th>
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#1D4F9C] font-semibold">
                                            {routeData.slug.includes('hadapsar') || routeData.slug.includes('amanora') ? 'Joyville Hadapsar Annexe' : 'Joyville Sensorium'}
                                        </th>
                                        <th className="py-4 px-6 text-left text-[10px] tracking-[0.2em] uppercase text-[#323334] font-semibold">
                                            {routeData.slug.includes('kolte-patil') ? 'Kolte Patil Life Republic'
                                                : routeData.slug.includes('vtp') ? 'VTP Bellissimo'
                                                    : routeData.slug.includes('amanora') ? 'Amanora Trendsetter'
                                                        : routeData.slug.includes('pride-purple') ? 'Pride Purple'
                                                            : routeData.slug.includes('gera') ? 'Gera World of Joy'
                                                                : 'Godrej Evergreen Square'}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(routeData.slug.includes('kolte-patil') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', '33 Years (Since 1991)'],
                                        ['Land Area', '10.5 Acres', '390 Acres (Full Township)'],
                                        ['2 BHK Starting Price', '₹1.10 Cr', '₹72-75 Lakhs'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Mid-Market Standard'],
                                        ['Amenities Count', '60+', '30-40 per cluster'],
                                        ['Open Space', '75% of total land', '~60%'],
                                        ['Smart Home', '✅ Standard', '❌ Not standard'],
                                        ['Green Certification', '✅ EDGE Certified', '❌ No'],
                                        ['Rental Yield', '4.5-5.5%', '3.5-4.0%'],
                                        ['Best For', 'Luxury + Investment', 'Budget-first buyers'],
                                    ] : routeData.slug.includes('vtp') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', '30+ Years'],
                                        ['Land Area', '10.5 Acres', '~8 Acres'],
                                        ['2 BHK Starting Price', '₹1.10 Cr', '₹95 Lakhs - 1.15 Cr'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Good (Regional Focus)'],
                                        ['Amenities Count', '60+', '35+'],
                                        ['Open Space', '75% of total land', '~65%'],
                                        ['Smart Home', '✅ Standard', '✅ Select units'],
                                        ['Green Certification', '✅ EDGE Certified', '❌ No'],
                                        ['Unique Feature', '1.8km Walking Boulevard', 'Proximity to IT Park'],
                                        ['Best For', 'Luxury + Lifestyle + ROI', 'Mid-segment buyers'],
                                    ] : routeData.slug.includes('amanora') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', 'City Corp Group'],
                                        ['Land Area', '21 Acres', '400 Acres (Full Township)'],
                                        ['1 BHK Starting Price', '₹65 Lakhs', '₹75 Lakhs+'],
                                        ['Construction Quality', 'Premium (Shapoorji Legacy)', 'Standard Market'],
                                        ['Amenities Count', '60+', '50+ (Shared across township)'],
                                        ['Open Space', '80%', '~55%'],
                                        ['Ready to Move', '✅ Available', '✅ Available'],
                                        ['Clubhouse', '35,000 sq.ft. + 4 Mini Clubs', 'Shared Township Club'],
                                        ['Mall Proximity', '5.5 km to Amanora Mall', 'Within township'],
                                        ['Best For', 'Families + Value seekers', 'Mall-lifestyle seekers'],
                                    ] : routeData.slug.includes('pride-purple') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', '22+ Years'],
                                        ['Land Area', '10.5-21 Acres', '5-15 Acres'],
                                        ['2 BHK Starting Price', '₹65 Lakhs - 1.10 Cr', '₹70 Lakhs - 95 Lakhs'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Good (Regional Leader)'],
                                        ['Amenities Count', '60+', '30-45'],
                                        ['Open Space', '75-80%', '~60%'],
                                        ['Smart Home', '✅ Standard', '❌ Not standard'],
                                        ['Green Certification', '✅ EDGE Certified', '❌ No'],
                                        ['Township Scale', '1,000 Acres (Vanaha)', 'Standalone projects'],
                                        ['Best For', 'Premium lifestyle + investment', 'Mid-segment buyers'],
                                    ] : routeData.slug.includes('gera') ? [
                                        ['Developer Legacy', '150 Years (Since 1865)', '50+ Years'],
                                        ['Focus', 'Premium lifestyle + IT corridor', 'Family & child-friendly'],
                                        ['Land Area', '10.5-21 Acres', '8-12 Acres'],
                                        ['2 BHK Starting Price', '₹65 Lakhs - 1.10 Cr', '₹78 Lakhs - 1.05 Cr'],
                                        ['Construction Quality', 'Premium (Shapoorji Legacy)', 'Good (Pune-focused)'],
                                        ['Amenities Count', '60+', '40-50'],
                                        ['Child-Friendly Amenities', '✅ Extensive', '✅ Branded (ChildCentric®)'],
                                        ['Green Certification', '✅ EDGE Certified', '❌ No'],
                                        ['RERA Compliance', '✅ All Projects', '✅ All Projects'],
                                        ['Best For', 'IT professionals + investors', 'Young families'],
                                    ] : [
                                        ['Developer Legacy', '150 Years (Since 1865)', '127 Years (Since 1897)'],
                                        ['Land Area', '10.5 Acres', '~5 Acres'],
                                        ['2 BHK Starting Price', '₹1.10 Cr', '₹90 Lakhs - 1 Cr'],
                                        ['Construction Quality', 'Premium (Built Indian Parliament)', 'Premium (Godrej National Brand)'],
                                        ['Amenities Count', '60+', '40+'],
                                        ['Open Space', '75% of total land', '~65%'],
                                        ['Smart Home', '✅ Standard', '✅ Available'],
                                        ['Green Certification', '✅ EDGE Certified', '✅ IGBC Certified'],
                                        ['Unique Selling Point', '1.8km Walking Boulevard', 'Green Building Focus'],
                                        ['Best For', 'Luxury + Lifestyle', 'Green-conscious buyers'],
                                    ]).map(([param, joyville, competitor], idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F4F6F9]' : 'bg-[#FFFFFF]'}>
                                            <td className="py-3 px-6 font-medium text-[#323334]">{param}</td>
                                            <td className="py-3 px-6 text-[#1D4F9C] font-medium">{joyville}</td>
                                            <td className="py-3 px-6 text-[#323334]">{competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-6 bg-[#F4F6F9] border-t border-[#C5A059]/10">
                            <p className="text-sm text-[#323334] font-light">
                                <strong className="text-[#1D4F9C]">Verdict:</strong> {routeData.slug.includes('kolte-patil')
                                    ? 'Joyville Sensorium delivers premium construction quality and luxury amenities backed by 150+ years of Shapoorji Pallonji engineering legacy. Kolte Patil Life Republic offers a full township ecosystem at a lower price point. Choose Sensorium for quality and ROI; choose Life Republic for budget and township scale.'
                                    : routeData.slug.includes('vtp')
                                        ? 'Joyville Sensorium leads with EDGE certification, 60+ amenities, and the iconic 1.8km Walking Boulevard. VTP Bellissimo offers competitive pricing for mid-segment buyers. Choose Sensorium for premium lifestyle and long-term appreciation; choose VTP for value-oriented living.'
                                        : routeData.slug.includes('amanora')
                                            ? 'Joyville Hadapsar Annexe offers a massive 35,000 sq.ft. clubhouse, 80% open space, and the trusted Shapoorji Pallonji legacy at competitive pricing. Amanora Trendsetter leverages mall proximity. Choose Joyville for family-friendly township living; choose Amanora for retail-centric lifestyle.'
                                            : routeData.slug.includes('pride-purple')
                                                ? 'Joyville by Shapoorji Pallonji outperforms with 150 years of construction legacy, EDGE green certification, and 60+ premium amenities including smart home integration. Pride Purple offers competitive mid-segment pricing but lacks the institutional-grade construction quality. Choose Joyville for long-term investment value; choose Pride Purple for budget-first decisions.'
                                                : routeData.slug.includes('gera')
                                                    ? 'Joyville by Shapoorji Pallonji and Gera World of Joy both excel in family-focused design. Joyville leads with superior township scale (up to 1,000 acres), EDGE certification, and 60+ amenities. Gera stands out with branded ChildCentric® features. Choose Joyville for premium lifestyle and investment ROI; choose Gera for specialized child-friendly living.'
                                                    : 'Both are premium developers with strong legacies. Joyville Sensorium edges ahead with its 10.5-acre scale, 60+ amenities, and 1.8km walking boulevard. Godrej Evergreen Square offers compelling green certifications. Choose Sensorium for amenity density; choose Godrej for green-first living.'
                                }
                            </p>
                        </div>
                    </div>
                </section>
            )}

            <section className="max-w-7xl mx-auto px-6">
                {matchedProjects.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {matchedProjects.map(project => (
                            <Link href={`/projects/${project.slug}`} key={project.id} className="group flex flex-col bg-[#FFFFFF] rounded-sm overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute top-4 right-4 bg-[#FFFFFF]/90 backdrop-blur-md px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase text-[#1D4F9C]">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-[#1D4F9C] text-xs font-medium tracking-wider uppercase mb-3">
                                        <MapPin size={14} /> {project.location}
                                    </div>
                                    <h2 className="text-2xl font-serif text-[#323334] mb-3">{project.title}</h2>
                                    <p className="text-[#1D4F9C] font-serif italic text-xl mb-4">{project.price}</p>

                                    <p className="text-[#323334] font-light text-sm line-clamp-2 mb-6 border-b border-[#C5A059]/10 pb-6">
                                        {project.type}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between text-[#323334] group-hover:text-[#1D4F9C] transition-colors">
                                        <span className="text-[10px] tracking-[0.2em] font-bold uppercase">View Project</span>
                                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm">
                        <p className="text-[#323334] text-lg font-light">New inventory coming soon for this specific requirement.</p>
                        <Link href="/projects" className="inline-block mt-6 text-[#1D4F9C] border-b border-[#C5A059] pb-1 uppercase tracking-widest text-xs font-bold hover:text-[#323334] hover:border-[#323334] transition-colors">
                            View All Projects
                        </Link>
                    </div>
                )}
            </section>

            {/* FAQ Section for Rich Snippets */}
            {pageFaqs.length > 0 && (
                <section className="max-w-5xl mx-auto px-6 mt-20">
                    <h2 className="text-3xl font-serif text-[#323334] mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {pageFaqs.map((faq, idx) => (
                            <details key={idx} className="bg-[#FFFFFF] border border-[#C5A059]/20 rounded-sm group">
                                <summary className="px-6 py-5 cursor-pointer text-[#323334] font-medium text-sm hover:text-[#1D4F9C] transition-colors list-none flex justify-between items-center">
                                    {faq.q}
                                    <span className="text-[#1D4F9C] text-lg group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-5 text-[#323334] font-light text-sm leading-relaxed border-t border-[#C5A059]/10 pt-4">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </section>
            )}

            <footer className="py-20 bg-[#FFFFFF] border-t border-[#C5A059]/30 text-center mt-20">
                <div className="text-3xl font-serif text-[#1D4F9C] font-light tracking-widest mb-4">JOYVILLE <span className="text-[10px] font-sans tracking-[0.4em] text-[#323334] uppercase ml-2">Pune</span></div>
                <p className="text-[#323334]/40 text-[9px] tracking-[0.3em] uppercase font-medium">MahaRERA: P52100000000 | A Shapoorji Pallonji Real Estate Project</p>
            </footer>
        </main>
    );
}
