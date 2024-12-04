// components/PartsTable.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const PartsTable = () => {
  const [parts, setParts] = useState([]);
  const [editPart, setEditPart] = useState(null);
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

  useEffect(() => {
    fetchParts();
  }, []);

  const fetchParts = async () => {
    try {
      const response = await axios.get('/api/parts');
      setParts(response.data.data);
    } catch (error) {
      console.error('Error fetching parts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/parts/${id}`);
      fetchParts();
    } catch (error) {
      console.error('Error deleting part:', error);
    }
  };

  const handleEdit = (part) => {
    setEditPart(part._id);
    setFormData({
      partName: part.partName,
      partNumber: part.partNumber,
      companyName: part.companyName,
      applicable: part.applicable,
      quantity: part.quantity,
      requirement: part.requirement,
      price: part.price,
      totalPrice: part.price * part.quantity,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/parts/${editPart}`, formData);
      setEditPart(null);
      fetchParts();
    } catch (error) {
      console.error('Error updating part:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      totalPrice: name === 'price' || name === 'quantity' ? prevData.price * prevData.quantity : prevData.totalPrice,
    }));
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white">
        <thead>
          <tr className='bg-blue-900'>
            <th className="px-6 py-2 text-gray-500">Part Name</th>
            <th className="px-6 py-2 text-gray-500">Part Number</th>
            <th className="px-6 py-2 text-gray-500">Company Name</th>
            <th className="px-6 py-2 text-gray-500">Applicable</th>
            <th className="px-6 py-2 text-gray-500">Quantity</th>
            <th className="px-6 py-2 text-gray-500">Requirement</th>
            <th className="px-6 py-2 text-gray-500">Price</th>
            <th className="px-6 py-2 text-gray-500">Total Price</th>
            <th className="px-6 py-2 text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part._id}>
              <td className="border bg-blue-200 text-pink-800 px-6 py-2">{part.partName}</td>
              <td className="border px-6 py-2">{part.partNumber}</td>
              <td className="border px-6 py-2">{part.companyName}</td>
              <td className="border px-6 py-2">{part.applicable}</td>
              <td className="border px-6 py-2">{part.quantity}</td>
              <td className="border px-6 py-2">{part.requirement}</td>
              <td className="border px-6 py-2">{part.price}</td>
              <td className="border px-6 py-2">{part.totalPrice}</td>
              <td className="border bg-blue-100 text-white flex px-6 py-2">
                <button onClick={() => handleEdit(part)} className="bg-blue-500 px-2 py-1 rounded mr-2">Edit</button>
                <button onClick={() => handleDelete(part._id)} className="bg-red-500 px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editPart && (
        <form onSubmit={handleUpdate} className="space-y-4 p-4 max-w-lg mx-auto bg-white shadow-md rounded mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Part Name</label>
            <input
              type="text"
              name="partName"
              value={formData.partName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
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
              Update Part
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PartsTable;