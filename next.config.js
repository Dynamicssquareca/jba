/** @type {import('next').NextConfig} */
const { hostname } = new URL(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [`${hostname}`],
    formats: ['image/avif', 'image/webp']
  },
  env:{
    NEXT_PUBLIC_BACKEND_URL:'https://neweb.mailgemsroot.com'
  }
}

module.exports = nextConfig
