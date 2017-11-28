import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Menu from '../components/Menu'
import stylesheet from '../scss/index.scss';
export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					<link
						rel="stylesheet"
						href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
					/>
					{process.env.NODE_ENV == 'production'
						? <link
							rel="stylesheet"
							type="text/css"
							href={`/static/styles/app.css?${this.props
								.__NEXT_DATA__.buildId}`}
						/>
						: <style
							dangerouslySetInnerHTML={{
								__html: stylesheet
							}}
						/>}
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
