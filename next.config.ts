import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withStorybook = process.env.STORYBOOK === "true";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return withStorybook
      ? [
          {
            source: "/storybook/:path*",
            destination: "/storybook-static/:path*",
          },
        ]
      : [];
  },
};

export default withNextIntl(nextConfig);
