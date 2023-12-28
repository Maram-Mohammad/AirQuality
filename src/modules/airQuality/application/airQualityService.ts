import axios from 'axios';
import { AirQualityRepository } from '../infrastructure/repositories/airQualityRepository';
import { AirQuality } from '../infrastructure/Models/airQuality';

const AIRVISUAL_API_KEY = '45b05d0d-c3be-45a5-aced-44a72cd3ba24';

export class AirQualityService implements IAirQualityService {
    airQualityRepository:AirQualityRepository;

  constructor(airQualityRepository: AirQualityRepository) {
    this.airQualityRepository =airQualityRepository;
  }


  async getNearestCityAirQuality(lat: number, lon: number) {
    try {

        const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${AIRVISUAL_API_KEY}`;
        const response = await axios.get(apiUrl);

        const { data } = response.data;
        console.log(">>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>",response.data)

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
        const newitem = await this.airQualityRepository.create({'country':'France','city':'Paris','lat':lat, 'lon':lon,'pollution':res!.Result.Pollution} as AirQuality);
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
      
        pollutionData.forEach((item:AirQuality) => {
        
          if (item?.pollution?.aqius > maxAqius) {
            maxAqius = item.pollution.aqius;
            mostPollutedTime = item.pollution.ts;
          }
        });
      
       return mostPollutedTime || null;
      } catch (error) {
          console.error(error);
      }
  }

}
