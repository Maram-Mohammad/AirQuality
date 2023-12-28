import { AirQuality } from '../Models/airQuality';
import { IRepository } from '../../domain/interfaces/repositories/IRepository';
import { airQualityMongo } from '../db/airQualityMongo-server';
import { Model } from 'mongoose';

export class AirQualityRepository implements IRepository<AirQuality> {
  
  //Model that created from Schema
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



