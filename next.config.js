const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
	webpack: (config, { dev }) => {
		config.module.rules.push({
			test: /\.(css|scss)/,
			loader: 'emit-file-loader',
			options: {
				name: 'dist/[path][name].[ext]',
			}
		});

		if (!dev) {
			config.module.rules.push({
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 2,
								modules: false,
								url: true,
								sourceMap: false,
								minimize: true,
								localIdentName: false
									? '[name]-[local]-[hash:base64:5]'
									: '[hash:base64:5]'
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								includePaths: [
									path.resolve(__dirname, 'scss'),
									path.resolve(__dirname, 'pages')
								]
							}
						}
					]
				})
			});

			config.plugins.push(new ExtractTextPlugin('app.css'));
		} else {
			config.module.rules.push({
				test: /\.scss$/,
				use: [
					{ loader: 'raw-loader' },
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: 'inline'
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
							outputStyle: 'compressed'
						}
					}
				]
			});
		}
		/**
     * Install and Update our Service worker
     * on our main entry file :)
     * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
     */
		const oldEntry = config.entry

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'].push(path.resolve('./utils/offline'))
				return entry
			})

		/* Enable only in Production */
		if (!dev) {
			// Service Worker
			config.plugins.push(
				new SWPrecacheWebpackPlugin({
					cacheId: 'next-ss',
					filepath: './static/sw.js',
					minify: true,
					staticFileGlobsIgnorePatterns: [/\.next\//],
					staticFileGlobs: [
						'static/**/*' // Precache all static files by default
					],
					runtimeCaching: [
						// Example with different handlers
						{
							handler: 'fastest',
							urlPattern: /[.](png|jpg|css)/
						},
						{
							handler: 'networkFirst',
							urlPattern: /^http.*/ //cache all files
						}
					]
				})
			)
		}

		return config
	}
}
