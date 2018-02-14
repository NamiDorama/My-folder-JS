// Classes, Promises

// Classes (inheritance)

// 3

class Component {
  constructor(tagName = 'div') {
    this.tagName = tagName;
    this.node = document.createElement(this.tagName);
  }

  setText(text) {
    this.node.textContent = text;
  }
}

const p = new Component('p');
p.setText('Some new text');

class InputComponent extends Component {
  constructor(tagName) {
    super(tagName);
    this.node.placeholder = 'Enter text';
  }

  setText(text) {
    this.node.value = text;
  }
}

const input = new InputComponent('input');
input.setText('Enter your text');


// 4

class Figure {
  constructor(angels = 1) {
    this.angels = angels;
    this.abstract = true;
  }

  getInfo() {
    const { angels, abstract } = this;
    return {angels, abstract};
  }
}

const figure = new Figure(5);

class Triangle extends Figure {
  constructor(angels = 3, name = 'triangle') {
    super(angels);
    this.abstract = false;
    this.name = name;
  }

  getInfo() {
    const name = this.name,
          figureInfo = super.getInfo();
    return {name, ...figureInfo};
  }
}

const triangle = new Triangle(3);


// 5

class TableCreator{
  constructor(rows = 3, columns = 3) {
    this.rows = rows;
    this.columns = columns;
    this.table = [];
    this.getTableArr();
  }

  getTableArr() {
    for(let i = 0; i < this.rows ; i++) {
      this.table.push([]);
      for(let g = 0; g < this.columns ; g++) {
        this.table[i].push('');
      }
    }
    return this.table;
  }

  getTotalCells() {
    return this.rows * this.columns;
  }

  setText(rowNum, colNum, text) {
    this.table[rowNum-1][colNum-1] = text; // user will count rows and columns from 1
  }

  getText(rowNum, colNum) {
    return this.table[rowNum-1][colNum-1]; // user will count rows and columns from 1
  }

  getInfo() {
    const {rows, columns} = this,
          cells = this.getTotalCells();
    return {cells, rows, columns};
  }

  static getCells(rows = 0, columns = 1) {
    return rows * columns;
  }
}

const table1 = new TableCreator(5, 6);


// 6

class TableWithName extends TableCreator {
  constructor(rows, columns, title = 'table') {
    super(rows, columns);
    this.title = title;
  }

  getInfo() {
    const { title } = this,
            tableInfo = super.getInfo();
    return {title, ...tableInfo};
  }

  setTableName(title) {
    this.title = title.trim() || this.title;
  }
}

const usersTable = new TableWithName(2, 3, 'Users');


// Promise

// 1

function promiseCreator(ms, text) {
  return new Promise((resolve, reject) => setTimeout( () => resolve(text), ms ));
}

const testProm = promiseCreator(500, 'Ok');

// 2, 3

class PromiseCreator {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

const inst = new PromiseCreator();

// 3

const prom = new PromiseCreator();
const btn = document.getElementById('promiseBtn');
const promiseInput = document.getElementById('promiseInput');
prom.promise.then(console.log);

btn.addEventListener('click', () => {
	prom.resolve(promiseInput.value);
});


// 4

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(data => data.json())
	.then(data => {
	  const ul = document.getElementById('listForPosts');
	  let li = '';
		data.forEach(obj => li += `<li>${obj.id} ${obj.title}</li>`);
		ul.insertAdjacentHTML('beforeend', li);
	});

// 5

Promise.all([
	fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()),
	fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json())
])
  .then(data => data.forEach(el => console.log(el.length)));













