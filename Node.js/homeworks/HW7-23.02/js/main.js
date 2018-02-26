const date = new Date();
const opt = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};
const path = require('path');

console.log(`Date: ${date.toLocaleDateString("ru", opt)}
File: ${path.basename(__filename)}`);

const randomNum = require('./tools');
randomNum(3, 67);