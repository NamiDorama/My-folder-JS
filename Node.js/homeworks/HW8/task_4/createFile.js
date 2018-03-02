const fs = require('file-system');

const pathName = 'date';
const date = new Date().toLocaleString();

fs.mkdirSync(pathName);
fs.writeFile(`${pathName}/textDate.txt`, date, err => {
  if (err) throw err;
  console.log('Dir "date" with file "textDate" were created \nCheck it ;)');
});
