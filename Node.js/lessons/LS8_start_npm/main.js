const http = require('http');

http.get('http://info.cern.ch', res => {
	if(res.statusCode !== 200) throw new Error (res.statusMessage);
	res.setEncoding('utf-8');
	res.on('data', data => console.log('ok -> http'));
});


const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
	if (res.statusCode !== 200) throw new Error(res.statusCode);
	res.setEncoding('utf-8');
	let result = '';
	res.on('data', data => result += data); // записываем в переменную новую порцию данных
	res.on('end', () => console.log('ok -> https')); // когда запрос завершён, выводим в консоль текст
});

const weather = require('yahoo-weather');

weather('kharkov')
	.then(data => { console.log(data.description); console.log(data.item.condition);  })
	.catch(console.log);

const pcl = require('./package-lock');
console.log(Object.keys(pcl.dependencies).length);
