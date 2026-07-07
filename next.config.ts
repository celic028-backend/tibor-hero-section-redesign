import type { NextConfig } from "next";

// On GitHub Pages a project site is served from https://<user>.github.io/<repo>/,
// so assets need a base path. It is injected by the deploy workflow via
// NEXT_PUBLIC_BASE_PATH and stays empty for local `next dev` (served at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
