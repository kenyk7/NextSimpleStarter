import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from '../scss/index.scss';
export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<base href="/"/>
					<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=3,minimal-ui"/>
    			<link href="static/favicons/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    			<link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png"/>
					<meta name="theme-color" content="#42a692"/>
					<link rel="manifest" href="static/manifest.json"/>
					{process.env.NODE_ENV === 'production'
						? <link rel="stylesheet" type="text/css" href={`/static/styles/app.css?${this.props.__NEXT_DATA__.buildId}`} />
						: <style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
