import { Options, Sequelize } from 'sequelize';
const dbConfig = require(`../config/config.js`);
const config = dbConfig.development;

export default class SqualizeSingleton {

    private static instance: SqualizeSingleton | null = null;
    private sequelize: Sequelize;

    private constructor(options: Options) {
      this.sequelize = new Sequelize(options);
    }
  
    public static getConnectionInstance(): Sequelize {
        if (!SqualizeSingleton.instance) {
            SqualizeSingleton.instance = new SqualizeSingleton({ ...config, logging: false } as Options);  
        }
      return SqualizeSingleton.instance.sequelize;
    }
  
    // Other methods and properties can be added here
    public logMessage(message: string): void {
      console.log(`Singleton instance says: ${message}`);
    }
}

  

  
