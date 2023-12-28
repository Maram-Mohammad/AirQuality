import axios from 'axios';
import { IAirQualityRepository, IAirQuality } from '../domain';
const appConfig = require('../../../config/app.config');

export class AirQualityService {
    airQualityRepository:IAirQualityRepository;

  constructor(airQualityRepository: IAirQualityRepository) {
    this.airQualityRepository =airQualityRepository;
  }


  async getNearestCityAirQuality(lat: number, lon: number) {
    try {
        const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${appConfig.IQAIR_API_KEY}`;
        const response = await axios.get(apiUrl);
        const { data } = response.data;
        const formattedResponse = {
            Result: {
                Pollution: {
                    ts: data.current.pollution.ts,
                    aqius: data.current.pollution.aqius,
                    mainus: data.current.pollution.mainus,
                    aqicn: data.current.pollution.aqicn,
                    maincn: data.current.pollution.maincn,
                },
            },
        };
        return formattedResponse;
    } catch (error) {
        console.error(error);
        return null;
    }
  }
  async getNearestCityPollution(lat: number, lon: number) {
    try {

        let res= await this.getNearestCityAirQuality(lat,lon);
        const newitem = await this.airQualityRepository.create({'country':'France','city':'Paris','lat':lat, 'lon':lon,'pollution':res!.Result.Pollution} as IAirQuality);
        return true;

    } catch (error) {
        console.error(error);
        return false;
    }
  }
  async getMostPollutedTime(){
    try {
        let pollutionData = await this.airQualityRepository.getAll();
        if (!pollutionData || pollutionData.length === 0) {
          return null; // Return null for empty data
        }
      
        let maxAqius = -1;
        let mostPollutedTime: any;
      
        pollutionData.forEach((item:IAirQuality) => {
        
          if (item && item.pollution && item.pollution.aqius > maxAqius) {
            maxAqius = item.pollution.aqius;
            mostPollutedTime = item.pollution.ts;
          }
        });
      
       return mostPollutedTime; 
      } catch (error) {
          console.error(error);
      }
  }

}
