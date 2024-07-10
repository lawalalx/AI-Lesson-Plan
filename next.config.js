/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["https://ai-lesson-plan.vercel.app/", "localhost:3000"]
          }
    },
};

module.exports = nextConfig;
