const fs = require('fs');

const read = (name) =>
  new Promise( (res, rej) => {
    fs.readFile(name, 'utf-8', (err, data) => {
      err ? rej(err) : res(data)
    });
  });

module.exports = read;
