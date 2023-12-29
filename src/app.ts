import express, { Application, Request, Response, NextFunction } from "express";
import airQualityRoutes from './modules/airQuality/infrastructure/webApis/airQualityRoutes';
// import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from './swagger-output.json'; // Update this with the path to your generated Swagger JSON file



const app: Application = express();
app.use(express.json());
app.use('/airQuality', airQualityRoutes);



// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});




export default app;