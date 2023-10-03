/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ecomm.local"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
