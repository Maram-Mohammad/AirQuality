import { Router } from 'express';
import { AirQualityController } from './airQualityController';
const router = Router();

// /**
//  * @swagger
//  * /air-quality:
//  *   get:
//  *     summary: Get air quality information.
//  *     parameters:
//  *       - name: latitude
//  *         in: query
//  *         description: Latitude of the location.
//  *         required: true
//  *         type: number
//  *       - name: longitude
//  *         in: query
//  *         description: Longitude of the location.
//  *         required: true
//  *         type: number
//  *     responses:
//  *       200:
//  *         description: Successful response
//  *         content:
//  *           application/json:
//  *             example:
//  *               airQuality: 75
//  */
router.get('/', AirQualityController.getAll);
router.get('/test', AirQualityController.test);
router.get('/nearest-city-pollution', AirQualityController.getNearestCityPollution);
router.get('/most-polluted-time', AirQualityController.getMostPollutedTime);
router.get('/:id', AirQualityController.getById);
router.post('/', AirQualityController.create);
router.put('/:id', AirQualityController.update);
router.delete('/:id', AirQualityController.delete);

export default router;

