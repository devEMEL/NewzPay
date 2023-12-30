/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/github-pages",
};

module.exports = nextConfig;
