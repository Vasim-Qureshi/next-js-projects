import { NextResponse } from 'next/server';
import autopartsmodel from '@/app/lib/autopartsmodel';
import { dbConnect } from '@/app/utils/partsDbConn';

export async function POST(request) {
  await dbConnect();

  try {
    const products = [
      {
        name: 'Engine Oil',
        category: 'Engine Parts',
        description: 'High-quality engine oil for all vehicle types.',
        price: 29.99,
        image: '/images/engine-oil.jpg',
      },
      {
        name: 'Brake Pads',
        category: 'Brake Parts',
        description: 'Durable brake pads for safe stopping power.',
        price: 49.99,
        image: '/images/brake-pads.jpg',
      },
      // Add more products as needed
    ];

    await autopartsmodel.create(products);

    await autopartsmodel.insertMany(products);

    return NextResponse.json({ message: 'Products seeded successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to seed products', error: error.message }, { status: 500 });
  }
}