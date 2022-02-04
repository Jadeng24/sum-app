/* eslint-disable no-console */
const express = require('express');

const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
// eslint-disable-next-line import/extensions
const pool = require('../db.ts');
require('dotenv').config();

const port = process.env.PORT || 8080;

// Endpoints --------------------------------------------------------------------------
// place holder for the data
const users = ['test'];

app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const { user } = req.body;
    users.push(user);
    res.json('user addedd');
});

app.get('/api/boats', async (req, res) => {
    try {
        const allBoats = await pool.query('SELECT * FROM boats');

        res.json(allBoats.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Nodemailer --------------------------------------------------------------------------
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.REACT_APP_GMAIL_USER,
        pass: process.env.REACT_APP_GMAIL_PASS,
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Ready to Send');
    }
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mail = {
        from: 'sportutilitymarine@gmail.com',
        to: process.env.REACT_APP_GMAIL_USER,
        subject: 'Contact Form Submission',
        html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: 'ERROR' });
        } else {
            res.json({ status: 'Message Sent' });
        }
    });
});

// Production --------------------------------------------------------------------------
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.use(express.json);
    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'build', '../build/index.html'));
    });
} else {
    app.use(express.json);
    app.use('/', router);
}

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log('Listing on port: ', port);
});
