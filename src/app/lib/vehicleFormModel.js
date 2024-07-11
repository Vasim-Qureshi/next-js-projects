// models/Vehicle.js

import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  vehicleName: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  modelYear: { type: Number, required: true },
  engineNumber: { type: String, required: true },
  chassisNumber: { type: String, required: true },
  seatingCapacity: { type: Number, required: true },
  vehiclePictures: { type: [String], required: true }
});

const Vehicle = mongoose.models.Vehicle || mongoose.model('Vehicle', vehicleSchema);

export default Vehicle;