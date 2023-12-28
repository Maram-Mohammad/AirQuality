import { Connection } from 'mongoose';
import { AirQuality } from "../Models/airQuality"
import MongoSingleton  from './mongoose-server'
import { Model } from 'mongoose';

export class airQualityMongo {
  private connection: Connection;
  private static airQualityModel: Model<AirQuality>;


  constructor() {
    this.connection =  MongoSingleton.getConnectionInstance();
    this.initModels();
  }

  private initModels() {
    airQualityMongo.airQualityModel= AirQuality.initModel(this.connection);
  }

  public static getModels(){
    return{
      airQualityModel: airQualityMongo.airQualityModel
    }
  }

 
}


