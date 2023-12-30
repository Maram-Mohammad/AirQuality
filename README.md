# Air Quality API

## Introduction

This repository contains the source code for the Air Quality API, which provides information about air quality for different locations.

## Architecture

The project follows a Domain-Driven Design (DDD) architecture, organized into modules with clear separation of concerns. The application is built with TypeScript and runs on Node.js.

### File Structure

The project's file structure is organized as follows:

├── src
│   ├── app.ts
│   ├── index.ts
│   ├── mongo-server.ts
│   └── ...
│   └── modules
│   |   ├── airQuality
│   │       ├── application
│   │   │       └── webApis
│   │   │       └── webApis
│   │       ├── domain
│   │   │       └── webApis
│   │   │       └── webApis
│   │   │       └── webApis
│   │       ├── infrastructure
│   │   │       └── webApis
│   │   │       └── webApis
│   │   │       └── webApis
│   │       ├── tests
│   │   │       └── webApis
│   │   │       └── webApis
│   │   │       └── webApis
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── jest.config.js
├── package.json
└── ...

## Getting Started

### Prerequisites

Make sure you have Node 16 and npm installed on your machine.

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


## CI/CD


## Run Testing 








