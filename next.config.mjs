/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
          {
            source: "/(.*)", // Applies to ALL routes
            headers: securityHeaders,
          },
        ];
      },
};

const securityHeaders = [
    {
      key: "Content-Security-Policy",
      value: `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live;
      style-src 'self' 'unsafe-inline';
      font-src 'self' data:;
      img-src 'self' data: https:;
      connect-src 'self' https://www.google-analytics.com https://vercel.live;
      frame-src 'self'
    `.replace(/\s{2,}/g, ' ').trim()
    },
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin"
    },
    {
      key: "X-Frame-Options",
      value: "SAMEORIGIN"
    },
    {
      key: "X-Content-Type-Options",
      value: "nosniff"
    }
  ];


export default nextConfig;
