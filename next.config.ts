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
    }, {
      protocol: "https",
      hostname: "wired-wits-website.s3.amazonaws.com",
      pathname: "/**",
    }, {
      protocol: "https",
      hostname: "dancerapysiteimages.s3.amazonaws.com",
      pathname: "/**",
    }]
  }
};

export default nextConfig;
