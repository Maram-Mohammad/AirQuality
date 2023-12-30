import { IAirQuality, FilterQuery } from "../entities/airQuality";
import { IRepository } from "./IRepository";

export interface IAirQualityRepository extends IRepository<IAirQuality>{
    getAll(): Promise<IAirQuality[]>;
    getById(id: string): Promise<IAirQuality | null>;
    getByFilter(filter: FilterQuery): Promise<IAirQuality[] | null>;
    create(airQuality: IAirQuality): Promise<IAirQuality>;
    update(id: string, airQuality: IAirQuality): Promise<IAirQuality | null>;
    delete(id: string): Promise<boolean>;
  }