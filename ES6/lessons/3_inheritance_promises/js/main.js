const promise = new Promise( (res, rej) => {
	setTimeout( () => res('hello!'), 1000 );
} );

promise.then( data => {
	console.log('ok', data);
	return `There is another then ${data}`
})
	     .then( data => console.log('second ok', data) )
       .catch( data => console.log('fail', data) );


const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
	if (xhr.status != 200) console.error(xhr.status);
	else  console.log(xhr.responseText);
});

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send();


const promiceRequest = new Promise( (res, rej) => {
	xhr.addEventListener('readystatechange', () => {

	} )
} );


fetch('https://jsonplaceholder.typicode.com/users')
	.then(data => data.json())
	.then(data => console.log(data));

// homework!!! make them in list !!!

fetch('https://jsonplaceholder.typicode.com/posts')
	.then(data => data.json())
	.then(data => {
		data.forEach(obj => console.log(obj.id, obj.title))
	});

document.addEventListener('DOMContentLoaded', function() {
	var doc = document,
		text = doc.getElementById('text'),
		info = doc.getElementById('info'),
		btnText = doc.getElementById('btn-text');

	btnText.onclick = function() {
		getPromise('https://jsonplaceholder.typicode.com/users')
			.then(data => {
				const users = JSON.parse(data);
				const user = users[0];

				return getPromise(`https://jsonplaceholder.typicode.com/users/${user.id}`);
			})
			.then(user => text.innerHTML + '<br>' + user)
			.catch(err => text.innerHTML += '<br>Error: ' + err);

		info.innerHTML += '<br>added text';
	};

});