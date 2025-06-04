import { json, Router } from 'express';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';

import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';

import { isValidId } from '../middlewares/isValidId.js';

const router = Router();
const jsonParser = json();

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

router.post(
  '/',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.put(
  '/:contactId',
  jsonParser,
  isValidId,
  validateBody(createContactSchema),
  ctrlWrapper(upsertContactController),
);

router.patch(
  '/:contactId',
  jsonParser,
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(patchContactController),
);

export default router;
