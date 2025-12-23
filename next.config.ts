import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  // Cache configuration for static assets
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
