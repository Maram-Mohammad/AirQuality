import axios from 'axios';
const appConfig = require('../../../../config/app.config');

export const AirVisualService = {
    async getAirnearstCityData(lat: number, lon: number){
        try {
            const apiUrl = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${ appConfig.IQAIR_API_KEY}`;
            const response = await axios.get(apiUrl);
            return Promise.resolve(response);
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
        
    }

}