const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
	webpack: (config, { dev }) => {
		// Css & Scss load
		config.module.rules.push({
			test: /\.(css|scss)/,
			loader: 'emit-file-loader',
			options: {
				name: 'dist/[path][name].[ext]',
			}
		});
		// Fonts load
		config.module.rules.push({
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        outputPath: 'static/fonts/',
        publicPath: '/_next/',
        name: '[name].[hash:11].[ext]'
      }
		});
		// Images load
    config.module.rules.push({
      test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
      use: [
        // output path - '/.next/static/longhash.png'
        // url - '/_next/static/longhash.png'
        {
          loader: 'url-loader',
          options: {
          	limit: 1000,
            outputPath: 'static/',
            publicPath: '/_next/',
            name: '[name].[hash:11].[ext]'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            }
          }
        }
      ]
    });

		if (!dev) {
			// Scss & css loader: prod
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
			// Scss only loader: dev
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
