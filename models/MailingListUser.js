const isEmail = require('validator');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MailingListUserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },

    lastName: {
      type: String,
      required: false,
    },

    email: {
      type: String,
      unique: true,
      required: [true, 'Email address is required'],
      validate: [isEmail, 'invalid email'],
    },

    // textfield
    city: {
      type: String,
      required: false,
    },

    // Dropdown
    state: {
      type: String,
      required: false,
    },

    // dropdown
    country: {
      type: String,
      required: true,
      default: 'United States',
    },

    // textfield
    zipCode: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

// module.exports =
//   mongoose.models.MailingListUserSchema ||
//   mongoose.model('MailingListUser', MailingListUserSchema);

/* 
By submitting my information, I agree to receive personalized updates and marketing messages about Landslide based on my information, interests, activities, website visits and device data and in accordance with the Privacy Policy. I understand that I can opt-out at any time by emailing landslid.li@gmail.com.
*/
