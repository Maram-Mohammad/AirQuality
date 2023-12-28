import { AirQualityCronJob } from "./application/airQualityCronJob";
import { AirQualityService } from "./application/airQualityService";
import {airQualityMongo} from "./infrastructure/db/airQualityMongo-server"
import { AirQualityRepository } from "./infrastructure/repositories/airQualityRepository";
const airQualityServer = new airQualityMongo();

const repo = new AirQualityRepository();
const airQualityService = new AirQualityService(repo);
const job = new AirQualityCronJob(airQualityService);
job.start();
export default airQualityServer;
