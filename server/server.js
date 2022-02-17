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
const boats = require('./controllers/boats_ctrl.js');
require('dotenv').config();

const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
// Endpoints --------------------------------------------------------------------------
// place holder for the data
const users = ['test'];
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/user', (req, res) => {
    const { user } = req.body;
    users.push(user);
    res.json('user addedd');
});
// Boats -------------------------------------------------------------------------------
app.get('/api/boats', boats.getBoats);

app.post('/api/boats', boats.createBoat);
app.put('/api/boats/:id', boats.updateBoat);
app.delete('/api/boats/:id', boats.deleteBoat);

// Nodemailer --------------------------------------------------------------------------
const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.REACT_APP_GMAIL_USER,
        pass: process.env.REACT_APP_GMAIL_PASS,
    },
});

// contactEmail.verify((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Ready to Send Email');
//     }
// });

app.post('/api/contact', (req, res) => {
    const { name, email, message, copy } = req.body;
    const emailTo = 'sportutilitymarine@gmail.com, jaden.goodwin24@gmail.com';
    const emailRecipients = copy ? `${emailTo}, ${email}` : emailTo;
    const mailOptions = {
        from: `${name} <${email}>`,
        to: emailRecipients,
        subject: `SUM inquiry - ${name}`,
        html: `
        <div style="background: linear-gradient(0deg, dodgerblue, rgb(89, 172, 255)); border-radius:15px; overflow: hidden">
            <div style="width: 100%; padding: 10px 20px; background: #333; color: white; font-weight: 600;">
                <p>Name: ${name}</p>
            </div>
            <div style="padding: 30px 20px 20px 20px">
                <div style="background: white; padding: 20px 20px 10px 20px; color:#222; border-bottom-right-radius: 6px; border-bottom-left-radius: 6px;">
                    <a href='http://sport-utility-marine.com/' style="text-decoration:none;color:dodgerblue;"><h2 style="color:dodgerblue; margin:0; padding: 0;">Sport Utility Marine</h2></a>
                    <p style="color: #222">${message}</p>
                    <p style="color: #222; margin-bottom:20px;">Sent from: ${name} - ${email}</p>
              </div>
           </div>
        </div>`,
    };
    contactEmail.sendMail(mailOptions, (error) => {
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
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', '../build/index.html'));
    });
} else {
    // app.use(express.json);
    app.use('/', router);
}

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log('Listing on port: ', port);
});
