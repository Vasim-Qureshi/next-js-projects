// pages/api/data/[collection].js

import { customerSchema, vehicleSchema } from '@/app/lib/restaurantsModel';
import dbConnect from '@/app/utils/dbConnect'; // Assuming you have a dbConnect utility
import mongoose from 'mongoose';
import { useParams } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

// Define your schema models here
//const Customer = mongoose.model('Customer', );
//const Vehicle = mongoose.model('Vehicle', /* Vehicle schema */);
// Define other models as needed

export default async function handler(params) {
  params = useParams();
  const { collection } = params.mongodata;

  await dbConnect();

  try {
    let data;

    switch (collection) {
      case 'customers':
        getCustomer();
        break;
      case 'vehicles':
        getVehicle();
        break;
      // Add cases for other collections as needed
      default:
        return NextResponse.json({ success: false, error: 'Invalid collection name' });
    }
    NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    NextResponse.json({ success: false, error: 'Server Error' });
  }
};

async function getCustomer(){
  await mongoose.connect(connectionStr);
  const data = await customerSchema.find();
  
  return NextResponse.json({data})
}