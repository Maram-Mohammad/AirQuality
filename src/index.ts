import express from 'express';
export * from './modules/airQuality';
import airQualityRoutes from './modules/airQuality/webApis/airQualityRoutes';

// import { handleErrors } from './src/shared/utils/errorHandlers';
// import logger from './src/shared/utils/logger';
// import { AirQualityCronJob } from './src/modules/airQuality/application/airQualityCronJob';

const app = express();

// Middleware
app.use(express.json());


// // Routes
app.use('/airQuality', airQualityRoutes);


// Error handling middleware
// app.use(handleErrors);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});






