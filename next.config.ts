import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/pragma-next-v3.1",
    images: {
          unoptimized: true,
    },
};

export default nextConfig;
