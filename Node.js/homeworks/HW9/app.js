const http = require('http');
const port = 3000;
const fs = require('fs');
const images = ['png', 'jpeg', 'gif', 'svg', 'jpg'];
const regImg = new RegExp(`\\.(${images.join('|')})$`);
const regJs = /\.js/;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');

	if(regImg.test(req.url)) {
		fs.readFile(req.url.replace('/', ''), (err, data) => {
			if (err) {
				res.statusCode = 404;
				res.end(err.toString());
				return
			}

			res.end(data);
		});
	}

	fs.readFile('index.html', (err, data) => {
		if (err) {
			res.statusCode = 404;
			res.end(err.toString());
			return
		}

		res.end(data);
	});

	if(/\.js/.test(req.url)) {
		console.log(req.url.replace('/', ''));
		fs.readFile(req.url.replace('/', ''), 'utf-8', (err, data) => {
			if(err) {
				res.statusCode = 404;
				res.end(err.toString());
				return
			}

			console.log(data);
			res.end(data);
		})
	}

});


server.listen(port, () => {
	console.log(`Open in browser localhost:${port}`);
});