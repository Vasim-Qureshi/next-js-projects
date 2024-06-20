// components/VehicleForm.js

import { useState } from 'react';

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    vehicleName: '',
    registrationNumber: '',
    modelYear: '',
    engineNumber: '',
    chassisNumber: '',
    seatingCapacity: '',
    vehiclePictures: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'vehiclePictures') {
      setFormData({
        ...formData,
        vehiclePictures: [...files]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Vehicle Name</label>
        <input 
          type="text" 
          name="vehicleName" 
          value={formData.vehicleName} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Registration Number</label>
        <input 
          type="text" 
          name="registrationNumber" 
          value={formData.registrationNumber} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Model Year</label>
        <input 
          type="number" 
          name="modelYear" 
          value={formData.modelYear} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Engine Number</label>
        <input 
          type="text" 
          name="engineNumber" 
          value={formData.engineNumber} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Chassis Number</label>
        <input 
          type="text" 
          name="chassisNumber" 
          value={formData.chassisNumber} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Seating Capacity</label>
        <input 
          type="number" 
          name="seatingCapacity" 
          value={formData.seatingCapacity} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Vehicle Pictures (up to 6)</label>
        <input 
          type="file" 
          name="vehiclePictures" 
          onChange={handleChange} 
          multiple 
          accept="image/*" 
          required 
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default VehicleForm;