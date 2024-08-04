/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/en/jobs',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;