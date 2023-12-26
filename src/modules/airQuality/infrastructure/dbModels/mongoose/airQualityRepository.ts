import { AirQuality } from './airQuality';
import { IRepository } from '../../../../../shared/IRepository';
import { airQualityMongo } from './airQualityMongo-server';
import { Model } from 'mongoose';

export class AirQualityRepository implements IRepository<AirQuality> {
  airQualityModel: Model<AirQuality> = airQualityMongo.getModels()['airQualityModel'];


  async getAll(): Promise<AirQuality[]> {
    return this.airQualityModel.find().exec();
  }

  async getById(id: string): Promise<AirQuality | null> {
    return this.airQualityModel.findById(id).exec();
  }

  async create(entity: AirQuality): Promise<AirQuality> {
    const newUser = new this.airQualityModel(entity);
    return newUser.save();
  }

  async update(id: string, entity: AirQuality): Promise<AirQuality | null> {
    return this.airQualityModel.findByIdAndUpdate(id, entity, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.airQualityModel.findByIdAndDelete(id).exec();
    return result !== null;
  }
}


// module.exports = AirQualityRepository;

