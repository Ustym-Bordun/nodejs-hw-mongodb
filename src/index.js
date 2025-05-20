import { initMongoConnection } from './bd/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();

    setupServer();
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
