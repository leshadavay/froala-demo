/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  distDir: "_next",
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "localhost:3030",
      "storage.coha.beauty",
      "s3.ap-northeast-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
