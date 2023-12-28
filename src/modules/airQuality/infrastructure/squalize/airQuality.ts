// import { Model, Sequelize } from 'sequelize';
// import { AIRQUALITY_SCHEMA } from './airQuality.schema';



// export default class AirQuality extends Model<IAirQuality> implements IAirQuality {
//   id!: string;
//   name!: string;
//   city!: string;
//   state!: string;
//   country!: string;
//   lat!: number;
//   lon!: number;
//   forecast!: Forecast[];
//   current!: Current;
//   history!: History;
//   readonly createdAt!: Date;
//   readonly updatedAt!: Date;

//   static initModel(sequelize: Sequelize) {
//     AirQuality.init(AIRQUALITY_SCHEMA,
//       {
//         tableName: 'airQuality',
//         sequelize,
//       }
//     );
//   }
  
// }
// export {
//   AirQuality
// };
