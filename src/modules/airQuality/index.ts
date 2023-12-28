import { AirQualityCronJob } from "./application/airQualityCronJob";
import { AirQualityService } from "./application/airQualityService";
import { AirQualityRepository } from "./infrastructure/repositories/airQualityRepository";
export const airQualityRep = new AirQualityRepository();
export const airQualityService = new AirQualityService(airQualityRep);
export const job = new AirQualityCronJob(airQualityService);

