import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['en', 'es'],        // Supported locales
    defaultLocale: 'en',          // Default fallback locale
  },
};

export default nextConfig;
