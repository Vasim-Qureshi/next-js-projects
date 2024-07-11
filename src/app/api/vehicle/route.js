// pages/api/vehicles/index.js
import dbConnect from '@/app/utils/vehicleDb';
import Vehicle from '@/app/lib/vehicleFormModel';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.status(201).json({ success: true, data: vehicle });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'GET':
      try {
        const vehicles = await Vehicle.find({});
        res.status(200).json({ success: true, data: vehicles });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}