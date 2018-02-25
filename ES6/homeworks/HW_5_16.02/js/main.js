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

  let obj = [];
  let li = '';
  let ul = document.createElement('ul');

  users.forEach( task => {

    if(obj[task.userId]) {
      obj[task.userId].push(task);
    } else {
      obj[task.userId] = [task];
    }
  });

  obj.forEach( user => {
	  let completed = 0;
	  let notCompleted = 0;
	  let id = 0;

    user.forEach( one => {
      id = one.userId;
      one.completed ? completed++ : notCompleted++
    });

    li += `<li>Пользователь ${id} имеет ${completed} завершенных и ${notCompleted} незавершенных задач</li>`;
  });

  ul.insertAdjacentHTML('beforeend', li);
  document.body.appendChild(ul);
};

usersList();

// 3

// with fetch

const createUsers = async(users) => {
  const create = await Promise.all(
    users
      .map( ({name, age}) =>
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({ name, age }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(res => res.json())
      )
  )
    .then(console.log);
};

createUsers([{name: 'Vasya', age: 25}, {name: 'Petya', age: 40}, {name: 'Yullia', age: 22}, {name: 'Lesha', age: 24}]);

// with jQuery .post()

`https://codepen.io/NamiDorama/pen/WMzoVK?editors=1111`;
