import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Optimize images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  
  // Disable experimental features that might cause issues
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Ensure proper server configuration
  poweredByHeader: false,
};

export default nextConfig;
