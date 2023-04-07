/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: false,
  },
  // white list of domains for outside images
  images: {
    domains: ['i.pravatar.cc'],
  },
}

module.exports = nextConfig
