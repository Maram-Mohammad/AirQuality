import express from 'express';
import {airQualityRouter} from './modules/airQuality/infrastructure/webApis/airQualityRoutes';

export const routes = express.Router();

routes.use('/airQuality', airQualityRouter);