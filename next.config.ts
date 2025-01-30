import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // 🔹 Desactiva ESLint al hacer "next build"
  },
};

export default nextConfig;
