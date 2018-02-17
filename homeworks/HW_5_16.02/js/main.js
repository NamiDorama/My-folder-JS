// Generators, Async await, 16.02

// Generators

// 1

function* getValue(number) {
	let num = number;
	while (num * number < 1000000000) {
		yield num * number;
		num = num * number;
	}
	throw 'Value is too big!'

};


const valuer = getValue(5);
const bigVal = getValue(5000);