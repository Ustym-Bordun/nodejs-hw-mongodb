import { ContactsCollection } from '../bd/models/contact.js';

export const getContacts = () => {
  const contacts = ContactsCollection.find();
  return contacts;
};

export const getContactById = (contactId) => {
  const contact = ContactsCollection.findOne({ _id: contactId });
  return contact;
};

export const createContact = async (payload) => {
  const student = await ContactsCollection.create(payload);
  return student;
};

export const deleteContact = async (contactId) => {
  const contact = await ContactsCollection.findOneAndDelete({ _id: contactId });
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  // Коли додається includeResultMetadata: true, rawResult має приблизно таку структуру
  // {
  //   value: { /* оновлений документ */ },
  //   lastErrorObject: {
  //     updatedExisting: true,       // чи документ вже існував
  //     n: 1,                        // кількість змінених документів
  //     upserted: ObjectId('...'),   // є, якщо був створений новий документ через upsert
  //   },
  //   ok: 1
  // }

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
