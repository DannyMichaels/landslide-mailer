const testTemplate = require('../templates/test');
const sendEmail = require('./sendEmail');

module.exports = async (
  transporter,
  subject = 'Landslide Email',
  template = testTemplate
) => {
  // connecting to db doesn't work for now, so i'll just go to compass and download json everytime...
  // const db = await dbConnect();
  // console.log('models', db.collections);
  // console.log('User', User);
  // const result = await db.MailingListUser.find({}).exec();
  const result = JSON.parse(
    JSON.stringify(require('../data/mailingListUsers.json'))
  );

  if (!result.length) {
    console.log('no emails');
    return;
  }

  // const allUsers = result.map((doc) => {
  //   const user = doc.toObject();
  //   user._id = user._id.toString();

  //   return user;
  // });

  const allUsers = result;

  const emails = allUsers.map((user) => user.email);

  console.log(`EMAILS: ${JSON.stringify(emails)}`);

  await Promise.resolve(setTimeout(() => {}, 3000));

  return await Promise.all(
    allUsers.map(async (user) => {
      let mailOptions = {
        from: 'landslideemailingservice@gmail.com',
        to: user.email,
        subject: subject,
        html: template?.(user),
      };

      return await sendEmail(transporter, mailOptions);
    })
  );
};
