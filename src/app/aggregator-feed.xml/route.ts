import { projects } from '@/data/projects';

export const dynamic = 'force-static';

export async function GET() {
    const siteUrl = 'https://joyville-homes.com';
    const timestamp = new Date().toISOString();

    let xml = `<?xml version="1.0" encoding="utf-8"?>
<trovit>
`;

    projects.forEach((project) => {
        // Strip out non-numeric characters from price string and assume lakhs/crores parsing
        const priceClean = project.price.replace(/[^0-9.]/g, '');
        const numericPrice = project.price.includes('Cr') 
            ? parseFloat(priceClean) * 10000000 
            : parseFloat(priceClean) * 100000;

        xml += `
    <ad>
        <id><![CDATA[${project.id}]]></id>
        <url><![CDATA[${siteUrl}/projects/${project.slug}]]></url>
        <title><![CDATA[${project.title} | Premium ${project.type} in Pune]]></title>
        <type><![CDATA[For Sale]]></type>
        <agency><![CDATA[Shapoorji Pallonji Real Estate]]></agency>
        <content><![CDATA[${project.description}]]></content>
        <price><![CDATA[${numericPrice}]]></price>
        <property_type><![CDATA[${project.type.includes('Plot') ? 'Land' : 'Apartment'}]]></property_type>
        <address><![CDATA[${project.location}, Pune, Maharashtra, India]]></address>
        <city><![CDATA[Pune]]></city>
        <city_area><![CDATA[${project.location}]]></city_area>
        <region><![CDATA[Maharashtra]]></region>
        <postcode><![CDATA[411000]]></postcode>
        <latitude><![CDATA[18.5204]]></latitude>
        <longitude><![CDATA[73.8567]]></longitude>
        <pictures>
            <picture>
                <picture_url><![CDATA[${siteUrl}${project.image}]]></picture_url>
                <picture_title><![CDATA[${project.title} Exterior]]></picture_title>
            </picture>
        </pictures>
        <date><![CDATA[${timestamp.split('T')[0]}]]></date>
        <is_new><![CDATA[${project.status === 'New Launch' || project.status === 'Under Construction' ? '1' : '0'}]]></is_new>
    </ad>`;
    });

    xml += `
</trovit>`;

    return new Response(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
        },
    });
}
