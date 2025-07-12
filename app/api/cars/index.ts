import { getAllCars, saveCars} from '../../../lib/carService'

export default function handler(req, res) {
  if (req.method === 'GET') {
    const cars = getAllCars();
    res.status(200).json(cars);
  } else if (req.method === 'POST') {
    const cars = getAllCars();
    const newCar = {
      id: Date.now(),
      ...req.body,
      availability: true
    };
    cars.push(newCar);
    saveCars(cars);
    res.status(201).json(newCar);
  } else {
    res.status(405).end();
  }
}
