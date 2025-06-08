// import createHttpError from 'http-errors';

import { ContactsCollection } from '../db/models/contact.js';

import { calculatePaginationData } from '../utils/calculatePaginationData.js';

import { SORT_ORDER } from '../constants/index.js';

export const getContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = 'name',
  filter = {},
  userId,
}) => {
  const limit = perPage;

  const contactsQuery = ContactsCollection.find({ userId });

  const { type, isFavourite } = filter;
  if (type) {
    contactsQuery.where('contactType').equals(type);
  }
  if (typeof isFavourite === 'boolean') {
    contactsQuery.where('isFavourite').equals(isFavourite);
  }

  // * 1 Варіант з currentPage
  // для того щоб при запиті на сторінку (наприклад) 5 при тому
  // коли їх є менше ніж 5 віддавалася остання сторінка на якій є дані

  // const contactsCount = await ContactsCollection.find({userId})
  //   .merge(contactsQuery)
  //   .countDocuments();

  // const totalPages = Math.ceil(contactsCount / perPage);
  // // if (page > totalPages && totalPages > 0) {
  // //   // Якщо запитувана сторінка перевищує кількість існуючих
  // //   throw createHttpError(
  // //     404,
  // //     `Page ${page} not found. Total pages: ${totalPages}`,
  // //   );
  // // }
  // const pageNeedAdjustment = page > totalPages;
  // const currentPage = pageNeedAdjustment ? totalPages : page;

  // const skip = (currentPage - 1) * perPage;
  // const skip = page > 0 ? (page - 1) * perPage : 0;

  // const contacts = await contactsQuery
  //   .skip(skip)
  //   .limit(limit)
  //   .sort({ [sortBy]: sortOrder })
  //   .exec();

  // const paginationData = calculatePaginationData(
  //   contactsCount,
  //   perPage,
  //   currentPage,
  // );

  // return {
  //   data: contacts,
  //   ...paginationData,
  //   adjusted: pageNeedAdjustment,
  // };

  // * 2 Варіант Promise.all
  // Два незалежні запити виконуються одночасно, що пришвидшує відповідь

  // const skip = (page - 1) * perPage;
  const skip = page > 0 ? (page - 1) * perPage : 0;

  const [contactsCount, contacts] = await Promise.all([
    ContactsCollection.find({ userId }).merge(contactsQuery).countDocuments(),
    contactsQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async ({ contactId, userId }) => {
  const contact = await ContactsCollection.findOne({ _id: contactId, userId });
  return contact;
};

export const createContact = async ({ payload, userId }) => {
  const student = await ContactsCollection.create({ ...payload, userId });
  return student;
};

export const deleteContact = async ({ contactId, userId }) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId,
  });
  return contact;
};

export const updateContact = async (
  { contactId, userId, payload },
  options = {},
) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    { _id: contactId, userId },
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
    // isNew: Boolean(!rawResult?.lastErrorObject?.updatedExisting),
  };
};
