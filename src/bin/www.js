/* eslint-disable import/no-cycle */
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import app from '../app';
import logger from '../utils/logger';

dotenv.config();

// get the host and port name
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8888;

// Connect sequelise to the database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PSWD, {
  host: process.env.DB_URL, // your server
  dialect: process.env.DB_DIALECT,
  logging: console.log,
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connection has been established.');
  }).catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Unable to connect to the database: ', err);
  });

app.listen(port, () => {
  logger.info(`App listening on ${hostname}:${port}`);
});

process.on('SIGINT', () => {
  sequelize.close(); // This close the connection to the database
  logger.info('Shutting down server...');
  logger.info('Server successfully shutdown');
  process.exit(0);
});

export default sequelize;
