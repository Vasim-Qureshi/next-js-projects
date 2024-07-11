import { useState, useEffect } from 'react';
import axios from 'axios';

const SparePartsForm = () => {
  const [formData, setFormData] = useState({
    partName: '',
    partNumber: '',
    companyName: '',
    applicable: '',
    quantity: 0,
    requirement: '',
    price: 0,
    totalPrice: 0,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      totalPrice: prevData.price * prevData.quantity,
    }));
  }, [formData.price, formData.quantity]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.partName) tempErrors.partName = 'Part Name is required';
    if (!formData.partNumber) tempErrors.partNumber = 'Part Number is required';
    if (!formData.companyName) tempErrors.companyName = 'Company Name is required';
    if (!formData.applicable) tempErrors.applicable = 'Applicable is required';
    if (!formData.quantity || formData.quantity <= -1) tempErrors.quantity = 'Quantity must be greater than zero';
    if (!formData.requirement) tempErrors.requirement = 'Requirement is required';
    if (!formData.price || formData.price <= -1) tempErrors.price = 'Price must be greater than zero';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('/api/parts', formData);
        console.log('Part added:', response.data);
        // Reset form
        setFormData({
          partName: '',
          partNumber: '',
          companyName: '',
          applicable: '',
          quantity: 0,
          requirement: '',
          price: 0,
          totalPrice: 0,
        });
        setErrors({});
      } catch (error) {
        console.error('Error adding part:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto bg-white shadow-md rounded">
      <div>
        <label className="block text-sm font-medium text-gray-700">Part Name</label>
        <input
          type="text"
          name="partName"
          value={formData.partName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.partName && <p className="text-red-500 text-sm mt-1">{errors.partName}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Part Number</label>
        <input
          type="text"
          name="partNumber"
          value={formData.partNumber}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.partNumber && <p className="text-red-500 text-sm mt-1">{errors.partNumber}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Applicable</label>
        <input
          type="text"
          name="applicable"
          value={formData.applicable}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.applicable && <p className="text-red-500 text-sm mt-1">{errors.applicable}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Requirement</label>
        <input
          type="text"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.requirement && <p className="text-red-500 text-sm mt-1">{errors.requirement}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Total Price</label>
        <input
          type="number"
          name="totalPrice"
          value={formData.totalPrice}
          readOnly
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Part
        </button>
      </div>
    </form>
  );
};

export default SparePartsForm;