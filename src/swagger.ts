import swaggerAutogen from 'swagger-autogen';
import path from "path";

const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Air Quality API',
        description: 'API for managing air quality data',
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
        },
        schemas: {
            'Weather': {
                'type': 'object',
                'properties': {
                    'ts': {'type': 'string', 'format': 'date-time'},
                    'tp': {'type': 'number'},
                    'pr': {'type': 'number'},
                    'hu': {'type': 'number'},
                    'ws': {'type': 'number'},
                    'wd': {'type': 'number'},
                    'ic': {'type': 'string'},
                }
            },
            'PollKeys': {
                'type': 'object',
                'properties': {
                    'conc': {'type': 'number'},
                    'aqius': {'type': 'number'},
                    'aqicn': {'type': 'number'},
                }
            },
            'Pollution': {
                'type': 'object',
                'properties': {
                    'ts': {'type': 'string', 'format': 'date-time'},
                    'aqius': {'type': 'number'},
                    'mainus': {'type': 'string'},
                    'aqicn': {'type': 'number'},
                    'maincn': {'type': 'string'},
                    'p1': {'$ref': '#/components/schemas/PollKeys'},
                    'n2': {'$ref': '#/components/schemas/PollKeys'},
                    's2': {'$ref': '#/components/schemas/PollKeys'},
                    'co': {'$ref': '#/components/schemas/PollKeys'},
                }
            },
            'IAirQuality': {
                'type': 'object',
                'properties': {
                    'id': {'type': 'string'},
                    'city': {'type': 'string'},
                    'state': {'type': 'string'},
                    'country': {'type': 'string'},
                    'lat': {'type': 'number'},
                    'lon': {'type': 'number'},
                    'weather': {'$ref': '#/components/schemas/Weather'},
                    'pollution': {'$ref': '#/components/schemas/Pollution'},
                    'createdAt': {'type': 'string', 'format': 'date-time'},
                    'updatedAt': {'type': 'string', 'format': 'date-time'},
                }
            }
        }
    }
};
const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/app.router.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc);




