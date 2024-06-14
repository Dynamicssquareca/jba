/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [`${hostname}`, 'api.jewelsbyanu.com'],
    formats: ['image/avif', 'image/webp']
  },
  env:{
    NEXT_PUBLIC_BACKEND_URL:'https://api.jewelsbyanu.com'
  }
}

module.exports = nextConfig
