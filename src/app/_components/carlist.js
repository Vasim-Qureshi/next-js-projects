// components/CarList.js
import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const url = 'https://automobileapi1.p.rapidapi.com/automobile/cars';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8b2206ec26msh0a01fedba6899fbp18edb9jsn2a1ef525a53a', // Replace with your API key
        'x-rapidapi-host': 'automobileapi1.p.rapidapi.com'
      }
    };

    const fetchCars = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setCars(result);
        setLoading(false);
        
        // Extract unique makes, models, and colors
        const uniqueMakes = [...new Set(result.map((car) => (car.make)))];
        const uniqueModels = [...new Set(result.map((car) => (car.model)))];
        const uniqueColors = [...new Set(result.map((car) => (car.color)))];
        setMakes(uniqueMakes);
        setModels(uniqueModels);
        setColors(uniqueColors);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const filteredCars = cars.filter(car => {
    return (
      (selectedMake ? car.make === selectedMake : true) &&
      (selectedModel ? car.model === selectedModel : true) &&
      (minPrice ? car.price >= parseFloat(minPrice) : true) &&
      (maxPrice ? car.price <= parseFloat(maxPrice) : true) &&
      (selectedColor ? car.color === selectedColor : true)
    );
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Car List</h1>
      
      <div className="mb-4">
        <label htmlFor="car-make" className="block text-sm font-medium text-gray-700">Select Make</label>
        <select
          id="car-make"
          name="car-make"
          value={selectedMake}
          onChange={(e) => setSelectedMake(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Makes</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>{make}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="car-model" className="block text-sm font-medium text-gray-700">Select Model</label>
        <select
          id="car-model"
          name="car-model"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Models</option>
          {models.map((model, index) => (
            <option key={index} value={model}>{model}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="min-price" className="block text-sm font-medium text-gray-700">Min Price</label>
        <input
          type="number"
          id="min-price"
          name="min-price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="max-price" className="block text-sm font-medium text-gray-700">Max Price</label>
        <input
          type="number"
          id="max-price"
          name="max-price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="car-color" className="block text-sm font-medium text-gray-700">Select Color</label>
        <select
          id="car-color"
          name="car-color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="">All Colors</option>
          {colors.map((color, index) => (
            <option key={index} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <ul className="list-disc pl-5">
        {filteredCars.map((car, index) => (
          <li key={index} className="mb-2">
            {car.make} {car.model} ({car.price}, {car.color})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;