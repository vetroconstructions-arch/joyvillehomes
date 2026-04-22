import { Metadata } from 'next';
export const dynamic = 'force-static';
import ProjectsPortfolioClient from '@/components/ProjectsPortfolioClient';
import SGEAnswerHub from '@/components/SGEAnswerHub';
import Breadcrumbs from '@/components/Breadcrumbs';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: "All Projects | Joyville Homes by Shapoorji Pallonji Pune",
    description: "Explore the complete portfolio of premium residential projects by Shapoorji Pallonji in Pune. 2 & 3 BHK flats in Hinjewadi, Hadapsar, Bavdhan & more.",
    keywords: [
        "Shapoorji Pallonji projects Pune", "Joyville Pune all projects", "residential projects in Pune east", "residential projects in Pune west", 
        "Hinjewadi real estate", "Hadapsar real estate", "Bavdhan real estate", "buy flats in Pune by Shapoorji", "Joyville Sensorium Hinjewadi", "Joyville Vyomora Phase 1", "Joyville Hadapsar Annexe township", "Joyville Celestia reviews", "Joyville Skyluxe ultra luxury", "Vanaha Bavdhan 1000 acres", "SP Kingstown Pune luxury", "Wildernest SP Kingstown price", "Vanaha Golfland villa apartments", "Vanaha Springs valley view", "best apartments in Pune 2026", "real estate investment Pune guide", "Shapoorji Pallonji township Pune", "Pune real estate price list 2026", "possession date Joyville Pune projects"
    ],
    alternates: {
        canonical: 'https://joyville-homes.com/projects',
    }
};

export default function ProjectsPortfolio() {
    const siteUrl = 'https://joyville-homes.com';
    
    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
            { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${siteUrl}/projects` }
        ]
    };

    const itemListLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Shapoorji Pallonji Joyville Projects in Pune",
        "description": "Complete portfolio of premium residential projects in Hinjewadi, Hadapsar, and Bavdhan.",
        "url": `${siteUrl}/projects`,
        "numberOfItems": projects.length,
        "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "RealEstateProject",
                "name": project.title,
                "url": `${siteUrl}/projects/${project.slug}`,
                "image": project.image,
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": project.location,
                    "addressRegion": "Maharashtra",
                    "addressCountry": "IN"
                }
            }
        }))
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <Breadcrumbs items={[{ label: 'Projects Portfolio', href: '/projects' }]} />
            </div>
            <ProjectsPortfolioClient />
            <SGEAnswerHub />
        </>
    );
}
