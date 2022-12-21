/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // コンポーネントが２回レンダリングされる仕様となっているのでfalseに
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
