// import {airQualitySequelizeServer} from "./infrastructure/dbModels/squalize/airQualitySequelize-server"
// const airQualityServer = new airQualitySequelizeServer();
// export default airQualityServer;

import { AirQualityCronJob } from "./application/airQualityCronJob";
import { AirQualityService } from "./application/airQualityService";
import {airQualityMongo} from "./infrastructure/dbModels/mongoose/airQualityMongo-server"
import { AirQualityRepository } from "./infrastructure/dbModels/mongoose/airQualityRepository";
const airQualityServer = new airQualityMongo();

const repo = new AirQualityRepository();
const airQualityService = new AirQualityService(repo);
const job = new AirQualityCronJob(airQualityService);
job.start();
export default airQualityServer;
