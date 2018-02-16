function* simpleGen(msg) {
	yield msg + 'One';
	yield msg + 'Two';
};

const sg = simpleGen('The text is: ');
// console.log(sg.next());
// console.log(sg.next());
// console.log(sg.next());


function* counterGen() {
	let counter = 0;

	yield 'The counter is: ' + counter++;
	yield 'The counter is: ' + counter++;
	yield 'The counter is: ' + counter;
};

const cg = counterGen();

// for (let val of cg) console.log(val);


function* test() {
	console.log('Start');
	yield 1;
	console.log('One is done');
	yield 2;
	console.log('Two is done');
	yield 3;
	console.log('Three is done');
};

// for (let val of test()) console.log(val);


function* texts() {
	yield 'hello';
	yield 'ola';

	return 'by-by';

	yield 'bye'; // after return will not execute
};

// for (let val of texts()) console.log(val);


function* test2() {
	console.log('Start');
	yield 1;
	console.log('One is done');
	yield 2;
	throw new Error('done!');  // обработать ошибку можно с помощью try ... catch
	console.log('Two is done');
	yield 3;
	console.log('Three is done');
};

const t = test2();

// for (let val of t) {
// 	console.log(val);
// 	// if(val === 2) t.return();
// };



// try... catch

function getLength(str) {
	let length = 0;

	try {
		length = str.length;
	} catch (err) {
		console.log(err);
	} finally {
		console.log('finally');
	}

	return length;
}



function* test3() {
	const greet = yield 'gemme a greeting';
	console.log(greet);

	const greet2 = yield 'second a greeting';
	console.log(greet2);
};

const t3 = test3();

console.log(t3.next());
console.log(t3.next('hello'));


// 1 hw -> use while

// 3 -> in codepen make fork


const getPhotos = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos');
	const photos = await response.json();
	return photos;
};


getPhotos().then(data => console.log("photos: ", data));


const getPhotos2 = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/photos');
	const photos = await response.json();
	return photos;
};

const renderPhotos = async () => {
	const photos = await getPhotos();
	document.body.innerHTML = photos.map(photo => photo.title);
};

renderPhotos();

// 1 -> fetch response to structure.js

// 2 -> filter, map

// -> do in codepen

Promise.all(
	[{name: 'Vasia', age: 25}, {name: 'Petia', age: 40}]
		.map( ({name, age}) =>
			fetch('url', {
				method: 'POST',
				body: JSON.stringify( {name, age} ),
				headers: {
					"Content-type": ""
				}
			})
				.then(res => res.json())
		)
)
.then(console.log);
