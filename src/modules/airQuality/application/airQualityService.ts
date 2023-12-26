import axios from 'axios';
import { AirQualityRepository } from '../infrastructure/dbModels/mongoose/airQualityRepository';
import { AirQuality } from '../infrastructure/dbModels/mongoose/airQuality';

const AIRVISUAL_API_KEY = '45b05d0d-c3be-45a5-aced-44a72cd3ba24';

export class AirQualityService {
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

        // res.json(formattedResponse);
    } catch (error) {
        console.error(error);
        return null;
        // res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getNearestCityPollution(lat: number, lon: number) {
    try {

        let res= await this.getNearestCityAirQuality(lat,lon);
        const newitem = await this.airQualityRepository.create({'country':'France','city':'Paris','lat':lat, 'lon':lon,'current':{'pollution':res!.Result.Pollution}} as AirQuality);

    } catch (error) {
        console.error(error);
        // res.status(500).json({ error: 'Internal Server Error' });
    }
  }


//   async getMostPollutedTime() {
//     try {

//         const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${AIRVISUAL_API_KEY}`;
//         const response = await axios.get(apiUrl);
//         console.log(">>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>",response)

//         const { data } = response.data;
//         console.log(">>>>>>>>>>>>>>response>>>>>>>>>>>>>>>>>>",response.data)

//         const formattedResponse = {
//             Result: {
//                 Pollution: {
//                     ts: data.current.pollution.ts,
//                     aqius: data.current.pollution.aqius,
//                     mainus: data.current.pollution.mainus,
//                     aqicn: data.current.pollution.aqicn,
//                     maincn: data.current.pollution.maincn,
//                 },
//             },
//         };

//         // res.json(formattedResponse);
//     } catch (error) {
//         console.error(error);
//         // res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }


}
