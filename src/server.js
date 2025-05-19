import express from 'express';
// import cors from 'cors';
// import pino from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';

import { corsMiddleware } from './middlewares/corsMiddleware.js';
import { loggerMiddleware } from './middlewares/loggerMiddleware.js';

import routes from './routers/index.js';

import dotenv from 'dotenv';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
dotenv.config();

const PORT = getEnvVar('PORT', 8080);

export const setupServer = () => {
  const app = express();

  app.use(corsMiddleware);

  app.use(loggerMiddleware);

  // Тестовий маршрут
  // app.get('/hello', (req, res) => {
  //   req.log.info({ route: '/hello' }, `The user went to the route '/hello'`);
  //   res.send('Привіт!');
  // });

  app.use(routes);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, (err) => {
    if (err) {
      throw err;
    }

    console.log(`Server is running on port ${PORT}`);
  });
};
