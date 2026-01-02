import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Enable output standalone for Docker deployment
    output: 'standalone',

    // Configure images
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/storage/**',
            },
        ],
    },

    // Environment variables exposed to client
    env: {
        NEXT_PUBLIC_APP_NAME: 'AL-NAQLA',
    },
};

export default nextConfig;
