/** @type {import('next').NextConfig} */
const nextConfig = {
  // 👇 this enables static HTML export
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // important for static export (no next/image optimization server)
  },
};

export default nextConfig;
