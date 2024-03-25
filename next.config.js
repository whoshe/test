/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/kitchen',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
