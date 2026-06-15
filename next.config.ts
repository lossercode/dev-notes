import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/dev-notes",
  assetPrefix: "/dev-notes",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
