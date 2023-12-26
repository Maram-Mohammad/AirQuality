import { Connection } from 'mongoose';
import { AirQuality } from "./airQuality"
import MongoSingleton  from '../../../../../shared/dbmongo/mongoose-server'
import { Model } from 'mongoose';

const pg = require('pg');
pg.defaults.parseInt8 = true;

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


