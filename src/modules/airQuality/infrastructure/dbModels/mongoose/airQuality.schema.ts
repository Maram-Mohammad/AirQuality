import mongoose, { Schema, Document, SchemaType, SchemaTypes } from 'mongoose';
import { AirQuality } from './airQuality';

export const airQualitySchema = new Schema<AirQuality>(
    {
      _id: { type: Schema.Types.ObjectId, required: true },
      id: { type: String, required: false },
      name: { type: String, required: false },
      city: { type: String, required: false },
      state: { type: String, required: false },
      country: { type: String, required: false },
      lat: { type: Number, required: false },
      lon: { type: Number, required: false },
      forecast: { type: SchemaTypes.Mixed, required: false }, // Use SchemaTypes.Array
      current: { type: SchemaTypes.Mixed, required: false }, // Use SchemaTypes.Mixed
      history: { type: SchemaTypes.Mixed, required: false }, // Use SchemaTypes.Mixed
    },
      { timestamps: true }
  );

