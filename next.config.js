/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // コンポーネントが２回レンダリングされる仕様となっているのでfalseに
  swcMinify: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  },
};

module.exports = nextConfig;
