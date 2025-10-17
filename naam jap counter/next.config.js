/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Explicitly enable the App Router
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;