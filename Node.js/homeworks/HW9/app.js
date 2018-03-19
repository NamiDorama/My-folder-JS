const http = require('http'),
      port = 3000,
      fs = require('fs'),
      fileFormat = ['png', 'jpeg', 'gif', 'svg', 'jpg', 'js'],
      reg = new RegExp(`\\.(${fileFormat.join('|')})$`),
      date = new Date(),
      day = date.getDate(),
      month = date.getMonth()+1,
      yyyy = date.getFullYear(),

      dd = day < 10 ? `0${day}` : day,
      mm = month < 10 ? `0${month}` : month,
      nowDate = `${dd}.${mm}.${yyyy}`;

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'text/html');

	if(reg.test(req.url)) {
		fs.readFile(req.url.replace('/', ''), (err, data) => {
			if (err) {
				res.statusCode = 404;
				res.end(err.toString());
				return;
			}

			res.end(data);
		});
		return;
	}

  fs.readFile('index.html','utf-8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(err.toString());
      return;
    }

    data = data.replace('</body>', `<p>${nowDate}</p></body>`);
    res.end(data);
  });

});


server.listen(port, () => {
	console.log(`Open in browser localhost:${port}`);
});