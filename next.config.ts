import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Build ayarlarını es geçmek için
  eslint: {
    ignoreDuringBuilds: true,
  },
  // @ts-ignore
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
