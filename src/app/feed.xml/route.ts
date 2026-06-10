import { projects } from '@/data/projects';
import { SEO_ROUTES } from '@/data/seo-routes';

export const dynamic = 'force-static';

export async function GET() {
    const siteUrl = 'https://joyville-homes.com';
    const timestamp = new Date().toUTCString();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Joyville Homes Pune | Real Estate Updates</title>
    <link>${siteUrl}</link>
    <description>Latest premium residential projects and real estate market updates from Shapoorji Pallonji Joyville Homes.</description>
    <lastBuildDate>${timestamp}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
`;

    // Add Projects as RSS Items
    projects.forEach((project) => {
        xml += `
    <item>
      <title><![CDATA[${project.title}]]></title>
      <link>${siteUrl}/projects/${project.slug}</link>
      <guid isPermaLink="true">${siteUrl}/projects/${project.slug}</guid>
      <description><![CDATA[${project.description}]]></description>
      <pubDate>${timestamp}</pubDate>
    </item>`;
    });

    // Add top 50 SEO routes to ensure scrapers pick up deep links
    SEO_ROUTES.slice(0, 50).forEach((route) => {
        xml += `
    <item>
      <title><![CDATA[${route.title}]]></title>
      <link>${siteUrl}/properties/${route.slug}</link>
      <guid isPermaLink="true">${siteUrl}/properties/${route.slug}</guid>
      <description><![CDATA[${route.description}]]></description>
      <pubDate>${timestamp}</pubDate>
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
