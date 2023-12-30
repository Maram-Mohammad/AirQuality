import { Router } from 'express';
import { AirQualityController } from './airQualityController';
export const airQualityRouter = Router();

airQualityRouter.get('/', AirQualityController.getAll);
airQualityRouter.get('/test', AirQualityController.test);
airQualityRouter.get('/nearest-city-pollution', AirQualityController.getNearestCityPollution);
airQualityRouter.get('/most-polluted-time', AirQualityController.getMostPollutedTime);
airQualityRouter.get('/:id', AirQualityController.getById);
airQualityRouter.post('/', AirQualityController.create);
airQualityRouter.put('/:id', AirQualityController.update);
airQualityRouter.delete('/:id', AirQualityController.delete);

