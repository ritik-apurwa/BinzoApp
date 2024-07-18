import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {

  typescript:{
    ignoreBuildErrors:true
  }, 
  eslint:{
    ignoreBuildErrors:true
  }, 



  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: hostname(),
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: hostname(),
      },
    ],
  },
};

export default nextConfig;
