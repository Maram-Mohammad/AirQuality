// Import Mongoose and initialize it
import mongoose from 'mongoose';
const dbConfig = require ('./config/app.config');
const config = dbConfig.DB;
const connectionString: string = config?.url;//'mongodb://localhost:27017/your-database-name'
console.log("connectionString>>>>>>", connectionString);
let db : mongoose.Connection | undefined = undefined;

export const setupMongo = (): mongoose.Connection =>{
  mongoose.connect(connectionString);
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  return db as mongoose.Connection;
}

export const teardownMongo = (db: mongoose.Connection)=>{
  db.close();
  db.dropDatabase();
}


// export default db;
