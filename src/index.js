import { initMongoConnection } from './bd/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    initMongoConnection();

    setupServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
