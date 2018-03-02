const http = require('http');
const fs = require('fs');

http.get('http://wttr.in/~kharkov', res => {
  if(res.statusCode !== 200) throw new Error (res.statusMessage);
  res.setEncoding('utf-8');
  let result = '';
  res.on('data', data => result += data);
  res.on('end', data => {
    fs.writeFile('weather.html', result, err => {
      if (err) throw err;
      console.log('File with weather was created!');
    })
  })
});