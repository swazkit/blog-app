import type { NextConfig } from 'next';


const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
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
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;