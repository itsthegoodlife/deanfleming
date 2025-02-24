/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'], // For your GitHub avatar
  },
  // Simplified rewrites
  async rewrites() {
    return []
  },
}

module.exports = nextConfig 