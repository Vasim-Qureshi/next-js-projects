const { default: mongoose } = require("mongoose");

const customerModel= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    address:String,
    contact:String,
});

const vehicleModel= new mongoose.Schema({
    name:String,
    color:String,
    brand:String,
    seating:String,
    bodytype:String,
    enginetype:String,
});


export const restaurantSchema= mongoose.models.restaurant
|| mongoose.model("restaurant",customerModel);

export const customerSchema= mongoose.models.customer
|| mongoose.model("customer",customerModel);

export const vehicleSchema= mongoose.models.vehicle
|| mongoose.model("vehicle",vehicleModel);