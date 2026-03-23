import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep Turbopack scoped to this nested project folder.
    root: process.cwd(),
  },
};

export default nextConfig;
