const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const pool = require('../db');
require('dotenv').config();

const port = process.env.PORT || 8080;

// place holder for the data
const users = ['test'];

app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    console.log('api/users called!!!!');
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const { user } = req.body;
    console.log('Adding user::::::::', user);
    users.push(user);
    res.json('user addedd');
});

app.get('/boats', async (req, res) => {
    try {
        const allBoats = await pool.query('SELECT * FROM boats');

        res.json(allBoats.rows);
    } catch (err) {
        console.error(err.message);
    }
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
