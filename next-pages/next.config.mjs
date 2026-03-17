/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "/next-showcase",
  assetPrefix: "/next-showcase/",
};

export default nextConfig;
