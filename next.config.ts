import type { NextConfig } from "next";

// Configuration for GitHub Pages deployment
// This is a USER site (HashanEranga.github.io), so no basePath/assetPrefix needed
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [],
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
