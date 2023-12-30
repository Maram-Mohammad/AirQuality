import express from 'express';
import {airQualityRouter} from './modules/airQuality/webApis/airQualityRoutes';

export const routes = express.Router();

routes.use('/airQuality', airQualityRouter);