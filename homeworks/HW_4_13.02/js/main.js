// Symbols, Iterators 13.02

// Iterators

// 1

const  names = { 0: 'Vasya', 1: 'Petya', 2: 'Kolya' };

names[Symbol.iterator] = function () {
  const length = Object.keys(this).length;
  let index = 0;

  return {
    next: () => {
      return {
        value: this[index++],
        done: index > length
      }
    }
  }
};

console.log([...names]);

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

// 3

const date = {[Symbol.iterator]: function() {
  const date = new Date();
  const methods = ['FullYear', 'Month', 'Date', 'Day', 'Hours', 'Minutes', 'Seconds'];
  let index = 0;

  return {
    next: () => {
      if(index <= methods.length - 1) {
        let i = methods[index++];
        return {
          value: `${i} is ${date[`get${i}`]()}`,
          done: false
        }
      }
      return {
        done: true
      }
    }
  }
}};

for (let val of date) console.log(val);