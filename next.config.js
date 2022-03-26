const { i18n } = require('./next-i18next.config')
// const withTM = require('next-transpile-modules')(['konva'])
// module.exports = withTM()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.tsx', 'api.ts', 'api.jsx', 'api.js'],
  i18n,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
