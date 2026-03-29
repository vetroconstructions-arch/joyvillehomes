import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.joyvillehomes.com',
      },
      {
        protocol: 'https',
        hostname: 'joyvillehomes.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shapoorjipallonji.com',
      },
      {
        protocol: 'https',
        hostname: 'shapoorjipallonji.com',
      },
      {
        protocol: 'https',
        hostname: 'shapoorjirealestate.com',
      },
      {
        protocol: 'https',
        hostname: 'www.joyville-homes.com',
      },
      {
        protocol: 'https',
        hostname: 'joyville-homes.com',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-Robots-Tag', value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
          { key: 'Link', value: '<https://www.googletagmanager.com>; rel=preconnect, <https://connect.facebook.net>; rel=preconnect' },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        source: '/fonts/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'joyvillehomes.com' }],
        destination: 'https://joyville-homes.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.joyvillehomes.com' }],
        destination: 'https://joyville-homes.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.joyville-homes.com' }],
        destination: 'https://joyville-homes.com/:path*',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-us',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en-us/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/properties/residential-projects-near-hinjewadi-phase-1',
        destination: '/locality/hinjewadi',
        permanent: true,
      },
      {
        source: '/properties/2-bhk-flats-in-hinjewadi-pune',
        destination: '/properties/2-bhk-flats-in-hinjewadi',
        permanent: true,
      },
      {
        source: '/properties/property-near-sp-infocity-phursungi',
        destination: '/properties/flats-near-sp-infocity-pune',
        permanent: true,
      },
      {
        source: '/projects/joyville-celestia-hinjewadi',
        destination: '/projects/joyville-celestia-hadapsar',
        permanent: true,
      },
      {
        source: '/projects/vanaha-springs-bavdhan',
        destination: '/projects/vanaha-springs-pune',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
