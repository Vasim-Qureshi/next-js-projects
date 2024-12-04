// utils/dbConnect.js

import mongoose from 'mongoose';
import { connectionStr,MONGODB_URI } from '../lib/db';

let isConnected;

async function dbConnect() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);

    isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default dbConnect;