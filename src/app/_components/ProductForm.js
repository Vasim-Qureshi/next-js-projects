// components/Form.js

import { useState } from 'react';

const Form = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    details: '',
    price: '',
    offer: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    setFormData({
      image: '',
      name: '',
      details: '',
      price: '',
      offer: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="image">Image URL</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="offer">Offer</label>
        <input
          type="text"
          id="offer"
          name="offer"
          value={formData.offer}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Product</button>
    </form>
  );
};

export default Form;