import express from 'express';
// import cors from 'cors';
// import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';

import { corsMiddleware } from './middlewares/corsMiddleware.js';
import { loggerMiddleware } from './middlewares/loggerMiddleware.js';

import dotenv from 'dotenv';
import { getContactById, getContacts } from './services/contacts.js';
dotenv.config();

const PORT = getEnvVar('PORT', 8080);

export const setupServer = () => {
  const app = express();

  // app.use(cors());
  app.use(corsMiddleware);

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );
  app.use(loggerMiddleware);

  // Тестовий маршрут
  // app.get('/hello', (req, res) => {
  //   req.log.info({ route: '/hello' }, `The user went to the route '/hello'`);
  //   res.send('Привіт!');
  // });

  app.get('/contacts', async (req, res) => {
    const contacts = await getContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });

  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);

    if (!contact) {
      return res.status(404).send({ message: 'Contact not found' });
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });

  app.use((req, res, next) => {
    res.status(404).send({ message: 'Not found' });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Server is running on port ${PORT}`);
  });
};
