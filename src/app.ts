import express from "express";
import {routes} from './app.router';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";
import swaggerJson from "./swagger_static.json";
const app = express();
app.use(express.json());

app.use('/', routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

export default app;