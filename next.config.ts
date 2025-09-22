import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
