/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // コンポーネントが２回レンダリングされる仕様となっているのでfalseに
  swcMinify: true,
  // env: {
  //   BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  // },
  // CORS許可設定
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
