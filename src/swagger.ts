import swaggerAutogen from 'swagger-autogen';
import path from "path";

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger AirQuality Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: 'http://localhost:5052',
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        }
    }
};
const routersPath = path.resolve(__dirname, './app.router.js');
const outputFile = './swagger_output.json';
const endpointsFiles = [routersPath];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);