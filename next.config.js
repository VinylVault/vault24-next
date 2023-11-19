/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ],
    },
}

module.exports = nextConfig
