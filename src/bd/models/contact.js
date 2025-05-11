// name - string, required
// phoneNumber - string, required
// email - string
// isFavourite - boolean, default false
// contactType - string, enum('work', 'home', 'personal'), required, default 'personal'

import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
      required: true,
    },
  },
  {
    timestamps: true,
    // versionKey: false,
  },
);

export const ContactsCollection = model('Contact', contactSchema); // collection name: contacts
