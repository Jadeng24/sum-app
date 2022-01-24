const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8080;

// place holder for the data
const users = ['test'];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
	console.log('api/users called!!!!');
	res.json(users);
});

app.post('/api/user', (req, res) => {
	const user = req.body.user;
	console.log('Adding user::::::::', user);
	users.push(user);
	res.json('user addedd');
});

// For Production (prod)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		req.sendFile(path.resolve(__dirname, 'build', '../build/index.html'));
	});
} else {
	app.get('/', (req, res) => {
		res.send('App Works !!!!');
	});
}

app.listen(port, (err) => {
	if (err) console.log(err);
	console.log('Listing on port: ', port);
});
