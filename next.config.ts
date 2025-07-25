// next.config.ts
import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ignoruj ESLint podczas builda
  eslint: {
    ignoreDuringBuilds: true,
  },

  // wyłącz Image Optimization API dla static export
  images: {
    unoptimized: true,
  },

  // statyczny eksport na Hostinger
 // output: "export",
  trailingSlash: true,

  webpack(config: Configuration, options: { dev?: boolean; isServer?: boolean }) {
    // ... Twoja konfiguracja SVG/SVGR
    for (const rule of config.module?.rules as RuleSetRule[]) {
      if (rule.test instanceof RegExp && rule.test.test(".svg")) {
        rule.exclude = /\.svg$/;
      }
    }
    config.module?.rules?.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
