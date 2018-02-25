let getInfo = Symbol();
let user = {
	name: 'Nami',
	age: 22,
	skills: 'js',
	[getInfo]() {
		for (let key in this) console.log(this[key]); // getInfo не попадет в цикл
	}
};

// Object.defineProperty({}); // ES5 -> почитать, можно попросить ссылку на презентацию
//
// .includes у массивов

const user2 = {
	age: 20,
	[Symbol.toPrimitive](hint) {
		if (hint == 'number') { return this.age; }
		if (hint == 'string') { return 'twenty'; }
		return `  The age is ${this.age} ` ;
	}
};


const pseudoArr = {
	0: 'zero',
	1: 'one',
	2: 'two',
	length: 3
};

pseudoArr[Symbol.iterator] = function() {
	let index = 0;

	return {
		next: () => {
			return {
				value: this[index++],
				done: index > this.length
			};
		}
	}
};

// for (let value of pseudoArr) { console.log(value) };

const newArr = [...pseudoArr];
// console.log(newArr);

const pseudoArr2 = {
	0: 'zero',
	1: 'one',
	2: 'two'
};

pseudoArr2[Symbol.iterator] = function() {
	let index = 0;
	const length = Object.keys(this).length;

	return {
		next: () => {
			return {
				value: this[index++],
				done: index > length
			};
		}
	}
};

// for (let value of pseudoArr2) { console.log(value) };

const newArr2 = [...pseudoArr2];
// console.log(newArr2);


const nums = {
	from: 1,
	to: 5
};

nums[Symbol.iterator] = function() {
	let index = 1;

	return {
		next: () => {
			return {
				value: index++,
				done: index > this.to + 1
			};
		}
	}
};

// for (let value of nums) { console.log(value) };


// 2

const obj = { zone: true, word: 'test', skill: 'JS', name: 'John' };

obj[Symbol.iterator] = function() {
	const keys = Object.keys(this); // ['zone', 'word', 'skills', 'name']
	let index = 0;
	keys.sort();

	return {
		next: () => {
			return {
				value: this[ keys[index++] ],
				done: index > keys.length
			}
		}
	}
};

console.log([...obj]);


// for (let l of obj) { console.log(l); } ⇒  //  "John" " JS" "test" true

// 3

const date = new Date();
const methods = ['FullYear', 'Month', 'Day'];
date[ 'get' + methods[0] ]();

