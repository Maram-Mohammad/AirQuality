import mongoose, { Connection } from 'mongoose';
import dbConfig from '../../../../shared/config/config';
const config = dbConfig.mongo;

export default class MongoSingleton {
    private static instance: MongoSingleton | null = null;
    private connection: Connection;

    private constructor() {
      const connectionString: string = config?.url || '';

      this.connection = mongoose.createConnection(connectionString); 
      this.mongoListners();   
    }

    private mongoListners(){
      this.connection.on('connected', () => {
        console.log('MongoDB connected');
      });
  
      this.connection.on('error', (err) => {
        console.error(`MongoDB connection error: ${err}`);
      });
  
      this.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
      });
  
      process.on('SIGINT', () => {
        this.connection.close();
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
      

      });
      
    }
  
    public static getConnectionInstance(): Connection {
        if (!MongoSingleton.instance) {
          MongoSingleton.instance = new MongoSingleton();  
        }
      return MongoSingleton.instance.connection;
    }
    
  
}

  

  
