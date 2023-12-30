import { IAirQualityRepository, IAirQuality, FilterQuery } from '../../domain';
import {airqualityModel } from "../db/airQualityDoc"
export class AirQualityRepository implements IAirQualityRepository  {
  
  async getByFilter(filter: FilterQuery): Promise<IAirQuality []| null> {
    try {
      const aggregationPipeline: any[] = [];

      // Match stage
      if (filter.searchTerm && filter.searchValue) {
        const matchStage = { $match: { [filter.searchTerm]: filter.searchValue } };
        aggregationPipeline.push(matchStage);
      }

      // Sort stage
      if (filter.sortItem && filter.sort) {
        const sortStage = { $sort: { [filter.sortItem]: filter.sort } };
        aggregationPipeline.push(sortStage);
      }

      // Limit stage
      if (filter.limit) {
        const limitStage = { $limit: filter.limit };
        aggregationPipeline.push(limitStage);
      }

      const result = await airqualityModel.aggregate(aggregationPipeline).exec();
      return result.length > 0 ? result: null;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAll(): Promise<IAirQuality[]> {
    return await airqualityModel.find().exec();
  }

  async getById(id: any): Promise<IAirQuality | null> {
    return await airqualityModel.findOne({_id: id}).exec();
  }

  async create(entity: IAirQuality): Promise<IAirQuality> {
    const newUser = await airqualityModel.create(entity);
    return newUser;
  }

  async update(id: string, entity: IAirQuality): Promise<IAirQuality | null> {
    return await airqualityModel.findByIdAndUpdate(id, entity, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await airqualityModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}



