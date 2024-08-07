// pages/index.js
"use client"
import CarList from "../_components/carlist";
import VehicleForm from "../_components/VehicleForm";


const Home = () => {
  return (
    <div>
      <h1>Vehicle Registration Form</h1>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <VehicleForm />
        <CarList/>
      </div>
    </div>
  );
};

export default Home;