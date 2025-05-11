import { ContactsCollection } from '../bd/models/contact.js';

export const getContacts = () => {
  const contacts = ContactsCollection.find();
  return contacts;
};

export const getContactById = (contactId) => {
  const contact = ContactsCollection.findById(contactId);
  return contact;
};
