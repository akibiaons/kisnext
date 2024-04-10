/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "console/c-bc37d939e4330b0eabc7b5b6a67ba7",
      },
    ],
  },
};

export default nextConfig;
