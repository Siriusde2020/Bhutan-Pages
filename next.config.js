/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // output: 'export', // Enable for static deployment with generateStaticParams
  trailingSlash: true,
};

module.exports = nextConfig;
