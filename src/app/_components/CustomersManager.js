'use client';
import { useState } from 'react';

export default function CustomerManagement() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contactNumberHome: '',
    contactNumberOffice: '',
    contactNumberPersonal: '',
    homeAddress: '',
    officeAddress: '',
    customersPhoto: '',
    idCardPhoto: '',
  });
  const [updateId, setUpdateId] = useState('');
  const [status, setStatus] = useState('');

  // Fetch all customers
  const handleFetch = async () => {
    try {
      const response = await fetch('/api/profile/importCustomers');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setStatus('Failed to fetch customers');
    }
  };

  // Add new customer
  const handleAdd = async () => {
    try {
      const response = await fetch('/api/profile/importCustomers', {
        method: 'POST',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setStatus(result.message);
      handleFetch();
    } catch (error) {
      console.error('Error adding customer:', error);
      setStatus('Failed to add customer');
    }
  };

  // Update customer
  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/profile/importCustomers?id=${updateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setStatus(result.error || 'Customer updated successfully');
      handleFetch();
    } catch (error) {
      console.error('Error updating customer:', error);
      setStatus('Failed to update customer');
    }
  };

  // Delete customer
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/profile/importCustomers?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setStatus(result.message || result.error);
      handleFetch();
    } catch (error) {
      console.error('Error deleting customer:', error);
      setStatus('Failed to delete customer');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Customer Management</h1>

      <div className="mb-4">
        <button onClick={handleFetch} className="bg-blue-500 text-white p-2 rounded-md">
          Show Customers
        </button>
        <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded-md ml-2">
          Add Customer
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          name="updateId"
          placeholder="Customer ID to Update"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          className="border p-2 rounded-md mr-2"
        />
        <button onClick={handleUpdate} className="bg-yellow-500 text-white p-2 rounded-md">
          Update Customer
        </button>
      </div>

      <div className="mb-4">
        <ul>
          {customers.map((customer) => (
            <li key={customer._id} className="mb-2 flex items-center">
              <div className="flex-1">
                <p>{customer.firstName} {customer.lastName}</p>
              </div>
              <button
                onClick={() => handleDelete(customer._id)}
                className="bg-red-500 text-white p-2 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {status && <p className="mt-4 bg-black text-white">{status}</p>}

      <div>
        <h2 className="text-xl font-bold mb-2">Customer Form</h2>
        <form className="space-y-4">
          {Object.keys(form).map((key) => (
            <div key={key}>
              <label className="block text-sm font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
              <input
                type="text"
                name={key}
                value={form[key]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
              />
            </div>
          ))}
        </form>
      </div>

    </div>
  );
}