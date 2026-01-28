import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'shadcn.png', // Just in case, though shadcn examples usually use github
      },
    ],
  },
};

export default nextConfig;
