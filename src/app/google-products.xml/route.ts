import { projects } from '@/data/projects';

export const dynamic = 'force-static';

export async function GET() {
    const siteUrl = 'https://joyville-homes.com';
    const timestamp = new Date().toISOString();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
        <title>Joyville Homes Pune | Premium Real Estate</title>
        <link>${siteUrl}</link>
        <description>Shapoorji Pallonji Joyville Homes Premium Residences</description>
        <lastBuildDate>${timestamp}</lastBuildDate>
`;

    // Add Projects as Products
    projects.forEach((project) => {
        // Strip out non-numeric characters from price string and assume lakhs/crores parsing
        const priceClean = project.price.replace(/[^0-9.]/g, '');
        const numericPrice = project.price.includes('Cr') 
            ? parseFloat(priceClean) * 10000000 
            : parseFloat(priceClean) * 100000;

        xml += `
        <item>
            <g:id>${project.id}</g:id>
            <g:title><![CDATA[${project.title} | Premium Flats in Pune]]></g:title>
            <g:description><![CDATA[${project.description}]]></g:description>
            <g:link>${siteUrl}/projects/${project.slug}</g:link>
            <g:image_link>${siteUrl}${project.image}</g:image_link>
            <g:condition>new</g:condition>
            <g:availability>${project.status === 'Under Construction' || project.status === 'New Launch' ? 'in_stock' : 'preorder'}</g:availability>
            <g:price>${numericPrice}.00 INR</g:price>
            <g:brand>Shapoorji Pallonji Joyville</g:brand>
            <g:google_product_category>Real Estate > Residential Properties</g:google_product_category>
            <g:custom_label_0>${project.location}</g:custom_label_0>
            <g:custom_label_1>${project.type}</g:custom_label_1>
        </item>`;
    });

    xml += `
    </channel>
</rss>`;

    return new Response(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
        },
    });
}
