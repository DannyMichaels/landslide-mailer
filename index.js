require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');
const sendEmails = require('./services/sendEmails');

app.listen(port, () => {
  console.log(`landslide nodemailer is listening at http://localhost:${port}`);
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const template = (user) =>
  `<h1>hello ${user?.firstName}, this is Landslide email here testing our automated mailing list!</h1>`;

const run = async () => {
  sendEmails(transporter, 'Landslide Email', template);
};

run();
