/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    runtime: "experimental-edge",
    urlImports: ["https://cdn.jsdelivr.net", "https://cdn.skypack.dev"],
  },
};

module.exports = nextConfig;
