import cors from 'cors';
import { getEnvVar } from '../utils/getEnvVar.js';

const PORT = getEnvVar('PORT', 8080);

const allowedOrigins = [
  `http://localhost:${PORT}`,
  `http://localhost:3000`,
  `http://localhost:8080`,
  `https://nodejs-hw-mongodb-contacts-app-gdzi.onrender.com`,
];

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    // Якщо origin не вказаний (наприклад, у Postman), або він у списку — дозволити
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  // origin: true,
  optionsSuccessStatus: 200,
});
