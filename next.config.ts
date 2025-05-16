import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/wikiworks-concept" : "",
  basePath: process.env.NODE_ENV === "production" ? "/wikiworks-concept" : "",
};

export default nextConfig;
