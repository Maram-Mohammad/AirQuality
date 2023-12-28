import { IAirQualityRepository, IAirQuality } from '../../domain';
import {airqualityModel } from "../db/airQuality"
export class AirQualityRepository implements IAirQualityRepository  {

  async getAll(): Promise<IAirQuality[]> {
    return await airqualityModel.find().exec();
  }

  async getById(id: string): Promise<IAirQuality | null> {
    return await airqualityModel.findById(id).exec();
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



