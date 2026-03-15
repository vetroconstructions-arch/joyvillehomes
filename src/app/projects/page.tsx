import { Metadata } from 'next';
export const dynamic = 'force-static';
import ProjectsPortfolioClient from '@/components/ProjectsPortfolioClient';
import SGEAnswerHub from '@/components/SGEAnswerHub';

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
    return (
        <>
            <ProjectsPortfolioClient />
            <SGEAnswerHub />
        </>
    );
}
