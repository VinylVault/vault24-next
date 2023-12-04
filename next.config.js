/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '192.168.0.10',
        port: '7000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'api.thevinylvaultshow.co.uk',
        port: '7000',
        pathname: '/media/**',
      },
    ],
  },
};

module.exports = nextConfig;
