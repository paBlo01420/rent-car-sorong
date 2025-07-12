import { NextRequest, NextResponse } from 'next/server';
import { getAllCars, saveCars } from '../../../../lib/carService';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const cars = getAllCars();
  const car = cars.find((c) => c.id === parseInt(params.id));
  if (!car) return NextResponse.json({ message: 'Car not found' }, { status: 404 });

  return NextResponse.json(car);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const cars = getAllCars();
  const updatedCars = cars.filter((c) => c.id !== parseInt(params.id));
  if (cars.length === updatedCars.length)
    return NextResponse.json({ message: 'Car not found' }, { status: 404 });

  saveCars(updatedCars);
  return NextResponse.json({ message: 'Deleted' });
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();
  const cars = getAllCars();
  const index = cars.findIndex((c) => c.id === parseInt(params.id));

  if (index === -1)
    return NextResponse.json({ message: 'Car not found' }, { status: 404 });

  cars[index] = { ...cars[index], ...body };
  saveCars(cars);

  return NextResponse.json(cars[index]);
}
