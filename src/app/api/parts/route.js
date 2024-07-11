// app/api/parts/route.js
import { NextResponse } from 'next/server';
import { partModelSchema } from '@/app/lib/partsModel';
import { dbConnect } from '@/app/utils/partsDbConn';
export async function GET(request) {
  await dbConnect();
  try {
    const parts = await partModelSchema.find({});
    return NextResponse.json({ success: true, data: parts });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const data = await request.json();
    const part = await partModelSchema.create(data);
    return NextResponse.json({ success: true, data: part }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}