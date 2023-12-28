import express, { Application } from 'express';
export * from './modules/airQuality';
import airQualityRoutes from './modules/airQuality/webApis/airQualityRoutes';
    

const app: Application = express();
// Middleware
app.use(express.json());
// // Rou٭tes
app.use('/airQuality', airQualityRoutes);
// Error handling middleware
// app.use(handleErrors);
// Start the server
        


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});


export default app;
