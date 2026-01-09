import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 여기에 설정 옵션을 추가합니다 */
  
  // 1. 대형 라이브러리(lucide-react 등)를 최적화해서 가져옵니다.
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // 2. 외부 이미지(Cloudinary, Unsplash 등)를 안전하게 보여주기 위한 설정
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;