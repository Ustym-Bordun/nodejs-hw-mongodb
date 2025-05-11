import pino from 'pino-http';

const logger = pino({
  transport: {
    target: 'pino-pretty', // форматований вивід у консоль
    options: {
      colorize: true, // кольоровий вивід
      translateTime: 'HH:MM:ss.l', // зручний формат часу
      ignore: 'pid,hostname', // не виводити зайві поля
    },
  },
});

export function loggerMiddleware(req, res, next) {
  logger(req, res); // додає req.log
  next();
}
