/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

export default nextConfig;
