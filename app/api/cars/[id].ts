import { getAllCars, saveCars } from '../../../lib/carService';

export default function handler(req, res) {
  const {
    query: { id },
    method
  } = req;

  const cars = getAllCars();
  const index = cars.findIndex(car => car.id == id);

  if (index === -1) {
    return res.status(404).json({ message: 'Car not found' });
  }

  switch (method) {
    case 'GET':
      res.status(200).json(cars[index]);
      break;
    case 'PUT':
      cars[index] = { ...cars[index], ...req.body };
      saveCars(cars);
      res.status(200).json(cars[index]);
      break;
    case 'DELETE':
      const deleted = cars.splice(index, 1);
      saveCars(cars);
      res.status(200).json(deleted[0]);
      break;
    default:
      res.status(405).end();
  }
}
