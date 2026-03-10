import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Joyville Homes Pune Residential Projects | Shapoorji Pallonji",
    description: "Explore Shapoorji Pallonji's premium portfolio of luxury residential projects across Pune, Hinjewadi, Hadapsar, and Bavdhan. Find luxury 2 & 3 BHK flats.",
    alternates: {
        canonical: "https://www.joyville-homes.com/projects"
    }
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
