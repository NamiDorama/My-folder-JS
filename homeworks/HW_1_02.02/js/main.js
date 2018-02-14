// 02.02 Spread/rest, destructuring, arrow function

// Spread/rest

//1

const numArr = [0, 67, -3, 56, -23, 0.00005, 4765];
Math.max(...numArr);

// 2

const a = [1, 2, 3];
       b = [4, 5, 6];

const newArr = [...a, ...b];

// 3

const addStrings = (...args) => document.body.insertAdjacentText('beforeend', args.join());

// Destructuring

// 1

const newObj = (...args) => {
  let [first = 'no arguments', ...other] = args;
  let obj = {
    first,
    other
  };
  return obj;
};

// 2

const organisation = {
  name: 'Google',
  info: { employees: 1536, partners: ['Microsoft', 'Facebook', 'Xing'] }
};

const getInfo = ( obj = { info: { partners: ['Unknow', 'Unknow'] } } ) => {
  let {name = 'Unknown', info: {partners: [first, second]}} = obj;
  return `Name: ${name},
  Partners: ${first}, ${second}`;
};

// 3

const greet = {
  type: 'div',
  text: 'Hello, world!'
};

const createElement = ({type = 'p', text = 'Hello'} = {}) => `<${type}>${text}</${type}>`;

// Arrow functions

// 1

const sum = (...args) => args.length ? args.reduce( ( prev, next ) => prev + next ) : 0;

