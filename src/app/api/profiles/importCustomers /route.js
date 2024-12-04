import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/app/utils/partsDbConn';
import { Data } from '@/app/lib/customers';
import Customer from '@/app/lib/customer-model';
export async function GET(req) {
  try {
    await dbConnect();
    const customers = await Customer.find();
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'An error occurred while fetching data' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await dbConnect();

    // Fetch JSON data from public directory
    const data = await response.json(Data);

    // Insert data into MongoDB
    await Customer.create(data);

    return NextResponse.json({ message: 'Data imported successfully!' });
  } catch (error) {
    console.error('Error importing data:', error);
    return NextResponse.json({ error: 'An error occurred while importing data' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await dbConnect();
    const { id } = req.nextUrl.query;
    const updateData = await req.json();
    const updatedCustomer = await Customer.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedCustomer) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }

    return NextResponse.json(updatedCustomer);
  } catch (error) {
    console.error('Error updating data:', error);
    return NextResponse.json({ error: 'An error occurred while updating data' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await dbConnect();
    const { id } = req.nextUrl.query;
    const result = await Customer.findByIdAndDelete(id);

    if (!result) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting data:', error);
    return NextResponse.json({ error: 'An error occurred while deleting data' }, { status: 500 });
  }
}