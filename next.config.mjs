/** @type {import('next').NextConfig} */
const isPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'portifolio';

export default {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? '/' + repo : '',
  assetPrefix: isPages ? '/' + repo + '/' : '',
};
