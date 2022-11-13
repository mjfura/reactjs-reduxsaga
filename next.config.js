/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.rviewer.io'
            }
        ]
    },
    env: {
        API_URL: process.env.API_URL
    }
}

module.exports = nextConfig
