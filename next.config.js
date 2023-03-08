/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EXP: process.env.EXP,
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
