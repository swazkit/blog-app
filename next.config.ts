import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'en.ac-illust.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thumb.ac-illust.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;