import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      }
    ],
  },
};

export default nextConfig;
