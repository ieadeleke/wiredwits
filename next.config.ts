import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'framerusercontent.com',
      pathname: '/**',
    }, {
      protocol: "https",
      hostname: "axionet.framer.website",
      pathname: "/**",
    }]
  }
};

export default nextConfig;
