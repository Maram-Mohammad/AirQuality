import { setupMongo }from './mongo-server';
try{
    const db = setupMongo();
    db.on('connected', () => {
        console.log('MongoDB connected');
    });
    db.on('disconnected', () => {
        console.log('MongoDB disconnected');
    });

}catch(err:any){
    console.error(`Error connecting to MongoDB: ${err}`);
}


import app from "./app";  
import {job} from "./modules/airQuality";
const PORT: Number = 5052;
app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
job.start();
