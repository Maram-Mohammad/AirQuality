
import { IAirQuality, Pollution, Weather } from '../../domain';
import {airQualitySchema} from './airQuality.schema';

import  mongoose, { Document} from 'mongoose';

export class IAirQualityDoc extends Document<IAirQuality> implements IAirQuality{ 
    id!: string;
    city!: string;
    state!: string;
    country!: string;
    lat!: number;
    lon!: number;
    weather!: Weather;
    pollution!: Pollution;
    readonly createdAt!: Date;
    readonly updatedAt!: Date;
}

export const airqualityModel = mongoose.model<IAirQualityDoc>('AirQuality', airQualitySchema);