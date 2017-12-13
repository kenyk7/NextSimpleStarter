const express = require('express');
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(_ => {
	const server = express();

  server.use('/_next/static', express.static(path.resolve('./.next/static')));

  server.get('/sw.js', (req, res) => {
    app.serveStatic(req, res, path.resolve('./static/sw.js'));
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`> App running on port ${PORT}`);
	});
});
