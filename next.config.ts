import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onoex-img.oss-cn-beijing.aliyuncs.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default withContentCollections(nextConfig);
