/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
dest :"public", 


})

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'themoviedb.org'],
  },
})

module.exports = nextConfig
