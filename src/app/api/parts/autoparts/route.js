import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/app/utils/partsDbConn';
import autopartsmodel from '@/app/lib/autopartsmodel';

export async function GET(request) {
  await dbConnect();

  try {
    const products = await autopartsmodel.find({});
    return NextResponse.json({ data: products });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch products', error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  await connectToDatabase();

  try {
    const { name, category, description, price, image } = await request.json();
    const product = new autopartsmodel({ name, category, description, price, image });
    await product.save();
    return NextResponse.json({ message: 'Product added successfully', product });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add product', error: error.message }, { status: 500 });
  }
}