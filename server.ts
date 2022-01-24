const express = require('express');
const app = express();

const path = require('path');

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		req.sendFile(path.resove(__dirname, 'build', 'index.html'));
	});
}

app.listen(port, (err) => {
	if (err) console.log(err);
	console.log('Listing on port: ', port);
})