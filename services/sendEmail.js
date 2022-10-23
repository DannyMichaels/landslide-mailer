const testTemplate = require('../templates/test');

require('dotenv').config();

let defaultOptions = {
  from: 'landslideemailingservice@gmail.com',
  to: 'landslideemailingservice@gmail.com',
  subject: 'Nodemailer test',
  // text: 'Hi from your nodemailer landslide project',
  html: testTemplate, // HTML body
};

module.exports = async (transporter, options = defaultOptions) => {
  return transporter.sendMail(options, function (err, data) {
    if (err) {
      console.log('Error ' + err);
    } else {
      console.log('Email sent successfully to ' + options.to);
    }
  });
};
