// models/Part.js
//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
  partName:String,
  partNumber:String,
  companyName:String,
  applicable:String,
  quantity:Number,
  requirement:String,
  price:Number,
  totalPrice:Number,
});

export const partModelSchema = mongoose.models.Part || mongoose.model('Part', PartSchema);