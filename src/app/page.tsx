import { Metadata } from 'next';
export const dynamic = 'force-static';
import HomeClient from '@/components/HomeClient';
import SGEAnswerHub from '@/components/SGEAnswerHub';

export const metadata: Metadata = {
    title: "Joyville Homes Pune | Shapoorji Pallonji | 2 & 3 BHK Flats in Hinjewadi, Hadapsar, Bavdhan",
    description: "Official Joyville Pune by Shapoorji Pallonji Real Estate. Explore 9 premium projects across Hinjewadi, Hadapsar & Bavdhan. 2 & 3 BHK flats starting ₹65 Lakhs. RERA approved. Check price list, floor plans & book a site visit today.",
    keywords: [
        "Joyville Homes Pune", "Shapoorji Pallonji Pune", "Shapoorji Pallonji Real Estate Pune", 
        "Joyville Sensorium", "Joyville Vyomora", "Joyville Hadapsar Annexe", "Joyville Celestia", "Joyville Skyluxe Edition", "Wildernest SP Kingstown", "Vanaha Bavdhan", "Vanaha Golfland", "Vanaha Springs",
        "2 BHK flats in Hinjewadi", "3 BHK flats in Hinjewadi", "2 BHK flats in Hadapsar", "3 BHK flats in Hadapsar", "apartments in Bavdhan Pune", "Shapoorji Pallonji projects in Pune", "Joyville Pune price list", "Joyville Pune floor plans", "Shapoorji Pallonji Pune contact", "flats near SP Infocity", "flats near Magarpatta City", "township projects in Pune", "ready to move flats Pune", "new launch projects Pune", "Hinjewadi IT park residential projects", "Shapoorji Pallonji Bavdhan township", "buy 2 BHK in Pune", "buy 3 BHK in Pune", "best residential projects in Pune", "Shapoorji Pallonji Pune sales gallery",
        "RERA approved projects Pune", "official price list Joyville Pune", "book site visit Shapoorji Pallonji", "lowest price 2 BHK Hinjewadi", "Joyville Pune possession date 2026"
    ],
    alternates: {
        canonical: 'https://joyville-homes.com',
    }
};

export default function Home() {
    return (
        <>
            <HomeClient />
            <SGEAnswerHub />
        </>
    );
}
