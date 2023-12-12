// connection/db.ts

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;

  if (!username || !password) {
    console.error('MongoDB connection error: Missing credentials');
    return;
  }

  const dbURI = `mongodb+srv://${username}:${password}@cluster1.jlmll9b.mongodb.net/paytm-insider-app`;

  try {
    await mongoose.connect(dbURI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
