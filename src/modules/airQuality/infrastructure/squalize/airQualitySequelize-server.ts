// import { Sequelize } from 'sequelize';
// import { AirQuality } from "./airQuality"
// import SqualizeSingleton from './dbSqualize/sequelize-server'
// const pg = require('pg');
// pg.defaults.parseInt8 = true;

// export class airQualitySequelizeServer {
//   sequelize: Sequelize;

//   constructor() {
//     this.sequelize =  SqualizeSingleton.getConnectionInstance();
//     this.initModels();
//     this.setupRelations();
//     this.syncSequelize();
//   }

//   private initModels() {
//     AirQuality.initModel(this.sequelize);
//   }

//   private setupRelations() {
//     const { models } = this.sequelize;

//     Object.keys(models).forEach((name) => {
//       if ('associate' in models[name]) {
//         (models[name] as any).associate(models);
//       }
//     });
//   }

//   private syncSequelize() {
//     this.sequelize
//       .sync()
//       .then(() => console.info('', '', 'sequelize sync database'))
//       .catch((err) => {
//         console.error('', '', 'syncSequelize: ',JSON.stringify(err));
//       });
//   }
// }


