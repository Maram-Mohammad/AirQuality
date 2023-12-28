import mongoose, { Schema, Document, SchemaType, SchemaTypes } from 'mongoose';
import { Connection } from 'mongoose';
import {airQualitySchema} from './airQuality.schema';

export class AirQuality extends Document { //implements IAirQuality{
    // id!: string;
    city!: string;
    state!: string;
    country!: string;
    lat!: number;
    lon!: number;
    weather!: Weather;
    pollution!: Pollution;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;

  static initModel(conn: Connection){
    console.log("initModel-----");
     return conn.model<AirQuality>(
        'AirQuality', airQualitySchema);
  }

}
