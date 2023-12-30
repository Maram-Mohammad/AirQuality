# Air Quality API

## Introduction

This repository contains the source code for the Air Quality API, which provides information about air quality for different locations.

# ---------------------------------------------------------------

### Installation Locally

To run the application locally, use the following command:
1. Install dependencies:
    npm install 
2. Compile and build Code 
    npm run compile
3. Run The App 
    npm start

The application will be accessible at http://localhost:5052.


#### Running with Docker 

    docker-compose up

    This command will build the Docker image and start the application in containers.

    Open your web browser and access the application at http://localhost:5052.

# ========================================

## Architecture

The project follows a Domain-Driven Design (DDD) architecture, organized into modules with clear separation of concerns. The application is built with TypeScript and runs on Node.js.


## API DOCS --> OpenAPI doc : http://localhost:5052/docs/#/AirQuality/post_api_airQuality
## UML - CLASS DIGRAM 
## UML -  SEQUENCE DIGRAM  
## Code Documentaion






### File Structure

The project's file structure is organized as follows:

├── src
│   ├── app.ts
│   ├── app.router.ts
│   ├── index.ts
│   ├── mongo-server.ts
│   └── swagger.ts
│   └── swagger_output.json
│   └── modules
│   |   ├── airQuality
│   │       ├── application
│   │   │       └── airQualityService.ts
│   │   │       └── AirQualityJob.ts
│   │       ├── domain
│   │   │       └── entities
│   │   │               └── IAirQuality.ts
│   │   │       └── repositories
│   │   │               └── IAirQualityRepo.ts
│   │   │       └── services
│   │   │               └── AirQualityService.ts
│   │       ├── infrastructure
│   │   │       └── db
│   │   │            └── AirQualitySchema.ts
│   │   │            └── AirQualityDocument.ts
│   │   │       └── repositories
│   │   │            └── AirQualityRepo.ts
│   │   │       └── webApis
│   │   │            └── AirQualityController.ts
│   │   │            └── AirQualityRouter.ts
│   │       ├── __tests__
│   │   │       └── e2e
│   │   │       └── unitTesting
│   │       ├── index.ts
│   └── Shared
│   |   ├── utils
│   │       ├── errorhandlers.ts
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── package.json
└── .env
└── tsconfig
└── readme.md




### Prerequisites

Make sure you have Node 16 and npm installed on your machine.



## CI/CD


## Run Testing 


## TO DO  








