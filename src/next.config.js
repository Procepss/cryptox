/** @type {import('next').NextConfig} */

const path = require('path');

const withVideos = require('next-videos');

const { bindClassnames } = require('./scripts/bindClassnames');

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	sassOptions: {
		includePaths: [path.join(__dirname, '/styles/')],
		additionalData: '@use "abstract" as *;',
	},
	webpack(config) {
		bindClassnames(config);

		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = withVideos(nextConfig);
