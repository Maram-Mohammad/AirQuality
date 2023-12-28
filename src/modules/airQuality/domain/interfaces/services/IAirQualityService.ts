
interface IAirQualityService{
    getNearestCityAirQuality(lat: number, lon:number):Promise<any>;
    getNearestCityPollution(lat:number, lon:number): Promise<boolean>;
    getMostPollutedTime():Promise<any>;
}


