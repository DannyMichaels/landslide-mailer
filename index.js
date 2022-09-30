require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');
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

let mailOptions = {
  from: 'landslideemailingservice@gmail.com',
  to: 'landslideemailingservice@gmail.com',
  subject: 'Nodemailer test',
  // text: 'Hi from your nodemailer landslide project',
  html: `<h1>Landslide Email</h1>
    <b>Do you receive this mail ?</b> `, // HTML body
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log('Error ' + err);
  } else {
    console.log('Email sent successfully');
  }
});
