    // app/api/cars/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getAllCars, saveCars } from '../../../lib/carService'

export async function GET(req: NextRequest) {
  const cars = getAllCars();
  return NextResponse.json(cars);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const cars = getAllCars();

  const newCar = {
    id: Date.now(),
    ...body,
    availability: true,
  };

  cars.push(newCar);
  saveCars(cars);

  return NextResponse.json(newCar, { status: 201 });
}
