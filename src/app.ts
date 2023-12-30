import express, { Application, Request, Response, NextFunction } from "express";
import {routes} from './app.router';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";



const app: Application = express();
app.use(express.json());

app.use('/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});




export default app;