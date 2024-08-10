/** @type {import('next').NextConfig} */
const nextConfig = {images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.production.linktr.ee',
        port: '',
        pathname: '/auth/**',
      },
    ],
  },};

export default nextConfig;
