/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // i18n: {
  //   locales: ['en', 'ko'],
  //   defaultLocale: 'ko',
  //   localeDetection: false,
  // },
  // output: 'standalone',
  /*target: "serverless",*/
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    loader: 'imgix',
    path: 'https://whoshe.github.io/test',
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/kitchen',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ]
  // },
  output: 'export',
}

module.exports = nextConfig
