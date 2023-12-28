import express, { Application, Request, Response, NextFunction } from "express";
import db from './mongo-server';
import airQualityRoutes from './modules/airQuality/infrastructure/webApis/airQualityRoutes';

const app: Application = express();

app.use(express.json());

app.use('/airQuality', airQualityRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});

db.on('connected', () => {
  console.log('MongoDB connected');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


// const PORT: Number = 5050;

// app.listen(PORT, (): void => console.log(`running on port ${PORT}`));

export default app;