const cron = require('node-cron');
import { AirQualityService } from './airQualityService';

export class AirQualityCronJob {
  constructor(private readonly airQualityService: AirQualityService) {}

  start(): void {
    console.log("Emit start JB....");
    cron.schedule('* * * * *', async () => {
      try {        
        console.log("Joob is Running ....");
        await this.airQualityService.getNearestCityPollution(48.856613, 2.352222);
      } catch (error: any) {
        console.error(`CRON Job Error: ${error.message}`);
      }
    });
  }
}
