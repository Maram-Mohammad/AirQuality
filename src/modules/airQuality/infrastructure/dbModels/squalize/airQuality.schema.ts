import { DataTypes, ModelAttributes } from 'sequelize';
import AirQuality from './airQuality';

export const AIRQUALITY_SCHEMA: ModelAttributes<AirQuality> = {
    
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  country:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  lon:{
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  location: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  forecast: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  current: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  history: {
    type: DataTypes.JSONB,
    allowNull: true,
  }

};
