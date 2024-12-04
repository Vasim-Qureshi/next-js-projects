import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  firstName: {type:String,require:true},
  lastName: { type: String, required: true },
  contactNumberHome: { type: String, required: true },
  contactNumberOffice: { type: String, required: true },
  contactNumberPersonal: { type: String, required: true },
  homeAddress: { type: String, required: true },
  officeAddress: { type: String, required: true },
  customersPhoto: { type: String, required: true },
  idCardPhoto: { type: String, required: true },
});

const Customer = mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);

export default Customer;