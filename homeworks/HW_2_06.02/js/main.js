// 06.02 Arrow function, objects, classes

// arrow function

// 2

const utils = {
	numbers: [1, 2, 3, 4],
	prefix: 'number',
	getOdd: function() {
		return this.numbers.map( number => `${this.prefix} - ${number}` );
	}
};

// 3

const list = ['a', 'b', 'c'];
const list2 = [{age: 45}, { age: 18 }, {number: 'one'}];

const getDate = () => new Date();

const getDay = () => ['РІСЃ', 'РїРЅ', 'РІС‚', 'СЃСЂ', 'С‡С‚', 'РїС‚', 'СЃР±'][new Date().getDay()]; // or:
const getDay2 = () => new Date().toLocaleDateString('ru', {weekday: 'short'});

const getListCopy = list => [...list];

// objects

//1

const getObject = (name = 'User', age = 25) => ( {name, age} );

// 2

const obj = {
	text: "I'm learning advanced JavaScript!",
	getLength() {
		return this.text.length;
	},
	reverse() {
		return this.text.split('').reverse().join('');
	}
};

// 3

const getOneObject = (...objects) => Object.assign({}, ...objects);

// classes

// 2

class Component {
	constructor(tagName = 'div') {
		this.tagName = tagName;
		this.node = document.createElement(this.tagName);
	}

	setText = (text) =>  this.node.textContent = text;
}

const newComp = new Component();
const newComp2 = new Component('span');

newComp.setText('hi');
newComp2.setText('hello');
