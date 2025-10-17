/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Explicitly configure App Router
  experimental: {
    appDir: true,
  },
  // Add output tracing for better debugging
  outputFileTracing: true,
};

module.exports = nextConfig;