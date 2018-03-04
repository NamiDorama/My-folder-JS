const http = require('http');
const port = 3000;

// FIRST LESSON TASK

// const style = `
// 	<style>
// 		body {
// 			background-color: black;
// 			color: white;
// 		}
// 	</style>`;
//
// const server = http.createServer((req, res) => {
// 	res.setHeader('Content-Type', 'text/html');
// 	http.get('http://wttr.in/~kharkov', (response) => {
// 		if (response.statusCode !== 200) { res.end('<strong style="color:red">Error!</strong>'); }
// 		else {   response.setEncoding('utf-8');
// 			let result = '';
// 			response.on('data', data => result += data);
// 			response.on('end', () => res.end(
// 				result.replace('<body', `${style}<body`)
// 			));
// 		}
// 	});
// });


// SECOND LESSON TASK

const fs = require('fs');
const images = ['png', 'jpeg', 'gif', 'svg', 'jpg'];
let regImg = new RegExp(`\\.(${images.join('|')})$`);

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
});


server.listen(port, () => {
	console.log(`Open in browser localhost:${port}`);
});