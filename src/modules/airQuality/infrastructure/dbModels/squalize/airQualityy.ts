// // import { DataTypes, Model } from 'sequelize';
// // // import sequelize from '../database/connection';

// // class AirQuality extends Model {
// //   public location!: { type: 'Point'; coordinates: number[] };
// //   public airQuality!: number;
// //   public datetime!: Date;
// // }

// AirQuality.init(
//   {
//     location: {
//       type: DataTypes.GEOMETRY('POINT'),
//       allowNull: false,
//     },
//     airQuality: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//     datetime: {
//       type: DataTypes.DATE,
//       defaultValue: DataTypes.NOW,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'AirQuality',
//   }
// );

// // export default AirQuality;
