/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,

  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },
}

module.exports = nextConfig
