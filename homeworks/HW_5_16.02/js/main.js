// Generators, async/await

// Generators

// 1

function* getValue(number) {
  let num = number;

  while(num * number < 1000000000) {
    yield num * number;
    num = num * number;
  };

  throw 'Value is too big!'
};

const valuer = getValue(5);
const bigVal = getValue(5000);

// 2

function* getSeconds() {

  function floor(num) {
    return Math.floor(num/10) * 10;
  };

  while(true) {
    yield floor(new Date().getSeconds());
  };
};

const getSec = getSeconds();


// 3

`https://codepen.io/NamiDorama/pen/KQQvWa`;


// Async/await

// 1

`https://plnkr.co/edit/C64yvHlKImWF9nxJwLrH?p=preview`;

// 2

const getUsers = async () => {
  const users = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await users.json();

  return data;
};

const usersList = async () => {
  const users = await getUsers();

  let obj = {};

  obj = users.map( (task) => {

    if(obj[task.userId]) {
      obj[task.userId].push(task);
    } else {
      obj[task.userId] = [];
      obj[task.userId].push(task)
    }
    console.log(obj);
  } );


};

usersList();

