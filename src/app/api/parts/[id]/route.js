// src/app/api/parts/[id]/route.js
import { NextResponse } from 'next/server';
import { dbConnect } from '@/app/utils/partsDbConn';
import { partModelSchema } from '@/app/lib/partsModel';

export async function GET(req, { params }) {
  const { id } = params;
  await dbConnect();
  const part = await partModelSchema.findById(id);
  if (!part) {
    return NextResponse.json({ error: 'Part not found' }, { status: 404 });
  }
  return NextResponse.json({ data: part });
}

export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.json();
  await dbConnect();
  const part = await partModelSchema.findByIdAndUpdate(id, data, { new: true });
  if (!part) {
    return NextResponse.json({ error: 'Part not found' }, { status: 404 });
  }
  return NextResponse.json({ data: part });
}

export async function DELETE(req, { params }) {
  const { id } = params;
  await dbConnect();
  const part = await partModelSchema.findByIdAndDelete(id);
  if (!part) {
    return NextResponse.json({ error: 'Part not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Part deleted successfully' });
}