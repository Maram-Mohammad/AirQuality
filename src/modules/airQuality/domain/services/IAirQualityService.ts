
// export interface IAirQualityService{
//     getNearestCityAirQuality(lat: number, lon:number):Promise<any>;
//     getNearestCityPollution(lat:number, lon:number): Promise<boolean>;
//     getMostPollutedTime():Promise<any>;
// }

import { IAirQuality } from '../entities/airQuality';
import { IAirQualityRepository } from '../repositories/airQualityRepo';

export class AirQualityService {
  constructor(private airQualityRepository: IAirQualityRepository) {}

  async create(qualityData: IAirQuality): Promise<IAirQuality> {
    // const user: IAirQuality = { id: 'generated-id', username, email };
    let info = await this.airQualityRepository.create(qualityData);
    return info;
  }

  async geItemById(id: string): Promise<IAirQuality | null> {
    return this.airQualityRepository.getById(id);
  }
}


