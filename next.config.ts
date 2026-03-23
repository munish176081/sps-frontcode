import type { NextConfig } from "next";
const storageUrl = process.env.NEXT_PUBLIC_STORAGE_URL || 'http://localhost:3002/storage';
const storageHostname = new URL(storageUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: storageUrl.startsWith('https') ? 'https' : 'http',
        hostname: storageHostname,
        ...(storageHostname === 'localhost' || storageHostname === '127.0.0.1' ? { port: '3002' } : {}),
        pathname: '/storage/**',
      },
    ],
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
