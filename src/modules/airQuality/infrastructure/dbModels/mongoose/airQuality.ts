import mongoose, { Schema, Document, SchemaType, SchemaTypes } from 'mongoose';
import { Connection } from 'mongoose';
import {airQualitySchema} from './airQuality.schema';

export class AirQuality extends Document {
    id!: string;
    name!: string;
    city!: string;
    state!: string;
    country!: string;
    lat!: number;
    lon!: number;
    forecast!: any[];
    current!: any;
    history!: any;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;

  static initModel(conn: Connection){
    console.log("initModel-----");
     return conn.model<AirQuality>(
        'AirQuality', airQualitySchema);
  }

}
