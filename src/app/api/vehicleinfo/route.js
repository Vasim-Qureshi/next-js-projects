// pages/api/vehicle-info.js
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req) {
  const url = 'https://rto-vehicle-information-india.p.rapidapi.com/getVehicleInfo';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '8b2206ec26msh0a01fedba6899fbp18edb9jsn2a1ef525a53a',
      'x-rapidapi-host': 'rto-vehicle-information-india.p.rapidapi.com',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(await req.json()), // Parse request body
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse JSON response
    return NextResponse.json(result, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  return NextResponse.json({ message: 'GET method is not supported for this endpoint.' }, { status: 405 });
}