// import { AirQuality } from './airQuality';
// import { IRepository } from '../../domain/interfaces/repositories/IRepository';

// export class AirQualityRepository implements IRepository<AirQuality> {
  
//   async create(entity: AirQuality): Promise<AirQuality> {
//     return AirQuality.create(entity);
//     // return Promise.resolve({}as AirQuality);
//   }
  
//   async getAll(): Promise<AirQuality[]> {
//     return AirQuality.findAll();

//   }
//   async getById(id: string): Promise<AirQuality | null> {
//     return AirQuality.findByPk(id);
//     // return Promise.resolve({}as AirQuality);
//   }
//   async delete(id: string): Promise<boolean> {
//     const deletedRows = await AirQuality.destroy({
//       // where: { id },
//     });

//     return deletedRows > 0;
//   }

//   async update(id: string, entity: AirQuality): Promise<AirQuality | null > {
//     const existingRecord = await AirQuality.findByPk(id);
    
//     if (!existingRecord) {
//       return null; // Record not found
//     }

//     await existingRecord.update(entity);
//     return existingRecord;
//   }

// }

// module.exports = AirQualityRepository;


