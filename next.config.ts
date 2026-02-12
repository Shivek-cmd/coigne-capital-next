import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.manuscdn.com",
      },
      {
        protocol: "https",
        hostname: "private-us-east-1.manuscdn.com",
      },
    ],
  },
};

export default nextConfig;
