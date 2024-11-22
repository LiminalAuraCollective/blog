const { withContentlayer } = require("next-contentlayer2");

/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = withContentlayer(nextConfig);
