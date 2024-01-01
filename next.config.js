/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
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
  // basePath: "/github-pages",
  exportPathMap: function () {
    // /Next-React-Components
    return {
      "/": { page: "/" },
      "/ap-grid-layout": { page: "/ap-grid-layout" },
      "/ap-highlight": { page: "/ap-highlight" },
    };
  },
  assetPrefix: !debug
    ? ""
    : "",
};

module.exports = nextConfig;
