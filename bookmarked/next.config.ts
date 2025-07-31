import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
async headers() {
    return [
      {
        source: '/(.*)',
        headers: process.env.CODESPACE_NAME
          ? [
              {
                key: 'x-forwarded-host',
                value: `localhost:3000`,
              },
              {
                key: 'Access-Control-Allow-Origin',
                value: `https://automatic-chainsaw-x9r6r6495w7hgqp-3001.github.dev`,
              },
            ]
          : [],
      },
    ]
  }, 
};

export default nextConfig;
