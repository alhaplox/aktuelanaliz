/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      // Eğer başka kaynaklardan da görsel çekeceksen buraya ekleyebilirsin
    ],
  },
};

export default nextConfig;
