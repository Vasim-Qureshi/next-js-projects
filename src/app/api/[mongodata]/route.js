// app/api/[collection]/route.js
import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/app/utils/partsDbConn';
import { partModelSchema } from '@/app/lib/partsModel';
import { customerSchema,vehicleSchema } from '@/app/lib/restaurantsModel';

export async function GET(request, { params }) {
  const { collection } = params;

  await dbConnect();

  let data;

  try {
    switch (collection) {
      case 'customers':
        data = await customerSchema.find({});
        break;
      case 'vehicles':
        data = await vehicleSchema.find({});
        break;
      case 'partsdb':
        data = await partModelSchema.find({});
        break;
      default:
        return NextResponse.json({ error: 'Invalid collection' }, { status: 400 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}