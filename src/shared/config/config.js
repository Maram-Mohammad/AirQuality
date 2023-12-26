/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_DIALECT, DB_SSL } = process.env;
const { MONGO_URL } = process.env;

const sqlizeConfig = {
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  dialect: DB_DIALECT,
  ssl: (DB_SSL == true),
  dialectOptions: {
    'ssl': (DB_SSL),
  }
};

const mongoConfig = {
  url: DB_HOST,
  user: DB_USERNAME,
  pass: DB_PASSWORD,
  dbName: DB_NAME,
  autoCreate: true,
  autoIndex: false,
  ssl: (DB_SSL == true),
};

// sequelize-cli only understands module.exports
module.exports = {
  development: sqlizeConfig,
  test: sqlizeConfig,
  production: sqlizeConfig,
  mongo:mongoConfig,
};

