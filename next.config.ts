/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ESLint errors will be ignored during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ TypeScript errors will be ignored during builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Image optimization domains & patterns
  images: {
    domains: [
      "img.freepik.com",
      "example.com",
      "i.postimg.cc",
      "lh3.googleusercontent.com",
      "i.ibb.co",
      "i.ibb.co.com",
      "scontent.fdac14-1.fna.fbcdn.net",
      "tmssl.akamaized.net",
      "www.xyjybida.co.uk",
      "www.sizoq.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
