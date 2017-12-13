import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Menu from '../components/Menu'
import stylesheet from '../scss/index.scss';
export default class MyDocument extends Document {
	render() {
		return (
			<html lang="es">
				<Head>
					<base href="/" />
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=2,minimal-ui"/>
    			<link href="static/favicons/favicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    			<link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png"/>
					<link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png"/>
					<link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png"/>
					<meta name="theme-color" content="#000000"/>
					<link rel="manifest" href="static/manifest.json"/>
					<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"/>
					{process.env.NODE_ENV === 'production'
						? <link rel="stylesheet" type="text/css" href={`/static/styles/app.css?${this.props.__NEXT_DATA__.buildId}`} />
						: <style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
					<title>Todo App</title>
				</Head>
				<body>
					<Menu />
					<Main />
					<NextScript />
					<script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
				</body>
			</html>
		);
	}
}
