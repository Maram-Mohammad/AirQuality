/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
'use strict';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv-flow').config();

export default configs = {
  STAGE: process.env.STAGE,

  LOGGER_LEVEL: process.env.LOGGER_LEVEL,
  LOG_MODULES: process.env.LOG_MODULES,
  LOG_MODE: process.env.LOG_MODE,
  PREFIX: process.env.PREFIX,


};
