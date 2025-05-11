import { initMongoConnection } from './bd/initMongoConnection.js';
import { setupServer } from './server.js';

initMongoConnection();
setupServer();
