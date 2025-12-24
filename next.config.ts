import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'www.mathteacher.education',
                    }
                ],
                destination: 'https://mathteacher.education/:path*',
                permanent: true,
            },
        ];
    },
    images: {
        localPatterns: [
            {
                pathname: '/api/example/**',
            },
        ],
    },
};

export default nextConfig;
