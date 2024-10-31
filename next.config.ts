import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*", // Áp dụng cho tất cả các trang
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, must-revalidate", // Tránh sử dụng `no-store` để cho phép bfcache
          },
        ],
      },
    ];
  },
  /* Các config khác nếu cần */
};

export default nextConfig;
