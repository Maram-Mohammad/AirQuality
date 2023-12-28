/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-flow').config();
const configs = {
  STAGE: process.env.STAGE,
  PREFIX: process.env.PREFIX,
  IQAIR_API_KEY: process.env.IQAIR_API_KEY ||'45b05d0d-c3be-45a5-aced-44a72cd3ba24' ,
  DB: {
    url: process.env.DB_HOST,
    user: process.env.DB_USERNAME || 'user',
    pass: process.env.DB_PASSWORD || 'pass',
    dbName: process.env.DB_NAME || 'air_quality_db',
    autoCreate: true,
    autoIndex: false,
    ssl: (process.env.DB_SSL == 'true'),
  }
};
module.exports = configs;
